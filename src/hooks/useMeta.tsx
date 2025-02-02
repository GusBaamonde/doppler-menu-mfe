import { useMutationObserver } from "./useMutationObserver";

export function useMeta(
  name: string,
  global: Window & typeof globalThis = window
) {
  const content = useMutationObserver({
    targetNode: global.document.body,
    config: {
      subtree: true,
      childList: true,
    },
    initialValue: () => readMeta(global.document, name),
    onMutation: (mutations, setValue) => {
      if (isAnyMutationRelated(mutations, name)) {
        const newContent = readMeta(global.document, name);
        setValue(newContent);
      }
    },
    global,
  });

  return content;
}

function isAnyMutationRelated(mutations: MutationRecord[], name: string) {
  for (const mutation of mutations) {
    if (mutation.type === "childList") {
      for (const nodeList of [mutation.addedNodes, mutation.removedNodes]) {
        for (let index = 0; index < nodeList.length; index++) {
          const node = nodeList[index];
          if (
            node.nodeName === "META" &&
            (node as HTMLMetaElement).name === name
          ) {
            return true;
          }
          if ("querySelector" in node && readMeta(node as ParentNode, name)) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

function readMeta(node: ParentNode, name: string): string | null {
  return (
    node.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content || null
  );
}
