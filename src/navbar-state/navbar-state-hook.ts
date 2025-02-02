import { useEffect } from "react";
import { AppSessionState } from "../session/app-session-abstractions";
import { useNavBarStateReducer } from "./navbar-state-reducer";
import {
  NavBarState,
  PrimaryNavItemState,
  SecondaryNavItemState,
} from "./navbar-state-abstractions";
import { useMeta } from "../hooks/useMeta";

function extractNavItems(
  appSessionState: AppSessionState
): ReadonlyArray<PrimaryNavItemState> {
  const items =
    appSessionState.status === "authenticated"
      ? appSessionState.userData.navItems
      : [];
  return items.map((x) => ({
    ...x,
    isActive: false,
    isOpen: false,
    isSelected: false,
    subNavItems: x.subNavItems
      ? (x.subNavItems.map((y) => ({ ...y, isActive: false })) as [
          SecondaryNavItemState,
          ...SecondaryNavItemState[]
        ])
      : undefined,
  }));
}

export function useNavBarState({
  currentUrl,
  appSessionState,
}: {
  currentUrl: string;
  appSessionState: AppSessionState;
}): {
  navBar: NavBarState;
  /** call this on hovering a primary NavItem */
  selectNavItem: (idHTML: string) => void;
  /** call this on mouse leave menu */
  unselectNavItem: () => void;
} {
  const defaultActiveItemId = useMeta("doppler-menu-mfe:default-active-item");
  const forcedActiveItemId = useMeta("doppler-menu-mfe:force-active-item");

  const [state, dispatch] = useNavBarStateReducer(() => ({
    currentUrl,
    defaultActiveItemId,
    forcedActiveItemId,
    items: extractNavItems(appSessionState),
  }));

  useEffect(() => {
    dispatch({
      type: "default-active/updated",
      idHTML: defaultActiveItemId,
    });
  }, [defaultActiveItemId, dispatch]);

  useEffect(() => {
    dispatch({
      type: "forced-active/updated",
      idHTML: forcedActiveItemId,
    });
  }, [forcedActiveItemId, dispatch]);

  useEffect(() => {
    dispatch({
      type: "items/updated",
      items: extractNavItems(appSessionState),
    });
  }, [appSessionState, dispatch]);

  useEffect(() => {
    dispatch({ type: "url/updated", href: currentUrl });
  }, [currentUrl, dispatch]);

  return {
    navBar: state,
    selectNavItem: (idHTML: string) =>
      dispatch({ type: "selected-item/updated", idHTML }),
    unselectNavItem: () =>
      dispatch({ type: "selected-item/updated", idHTML: null }),
  };
}
