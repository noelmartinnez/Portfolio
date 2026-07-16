import NerWidget from "./widgets/NerWidget";
import RagPipeline from "./widgets/RagPipeline";
import TokenizerWidget from "./widgets/TokenizerWidget";

export const widgetRegistry = {
  ner: NerWidget,
  rag: RagPipeline,
  tokenizer: TokenizerWidget,
};
