// src/data/projects.ts
// ─── Single source of truth for all portfolio projects ──────────────────────
//
// To add a project: copy one block below, fill in the fields.
// To update: edit the object here — all pages update automatically.
//
// 🔧 Fields still needing your real values are marked below.

export interface Project {
  slug:             string;
  title:            string;
  tagline:          string;
  description:      string;
  longDescription?: string;
  tech:             string[];
  hfSpace?:         string;
  hfSpaceType?:     'gradio' | 'streamlit' | 'static';
  github?:          string;
  status:           'live' | 'in-progress' | 'archived';
  featured:         boolean;
  year:             number;
}

export const projects: Project[] = [
  // ── 1. Agentic RAG System ───────────────────────────────────────────────
  {
    slug: 'agentic-rag',
    title: 'Agentic RAG System',
    tagline:
      'A conversational AI agent that autonomously chooses between local document retrieval and live web search before answering.',
    description:
      'A three-node LangGraph StateGraph pipeline (retrieve → route → answer) combining FAISS vector search ' +
      'with Tavily real-time web search. L2-distance confidence scoring decides at runtime whether to answer ' +
      'from local context or fall back to the web, indexing results back into FAISS for session memory. ' +
      'Responses stream token-by-token through a Gradio 6 interface with a metrics panel.',
    longDescription:
      'Built on LangGraph with a clean three-node architecture: a FAISS retriever node, a conditional routing ' +
      'node that evaluates L2 distance against a confidence threshold, and an answer node that streams via ' +
      'Qwen 2.5-7B-Instruct. Web results are re-indexed into FAISS during the session, giving the agent ' +
      'persistent memory without a database. The Gradio 6.x interface uses a sync generator + background ' +
      'thread streaming pattern to work around async/nest_asyncio limitations. Features multi-turn query ' +
      'enrichment and a live metrics panel showing retrieval source, confidence score, and token counts.',
    tech: ['LangGraph', 'Qwen 2.5-7B', 'FAISS', 'Tavily', 'Gradio', 'HuggingFace', 'Python'],
    hfSpace:     'https://YOUR_HF_USERNAME-agentic-rag.hf.space', // 🔧 replace
    hfSpaceType: 'gradio',
    github:      'https://github.com/saint-jeane/agentic-rag',    // 🔧 confirm repo name
    status:      'live',
    featured:    true,
    year:        2025,
  },

  // ── 2. Retail Price & Inventory Optimizer ───────────────────────────────
  {
    slug: 'retail-optimizer',
    title: 'Retail Price & Inventory Optimizer',
    tagline:
      'An ML pipeline that prescribes optimal pricing and inventory decisions from retail time-series data.',
    description:
      'Combines LightGBM, XGBoost, and Prophet to forecast demand and model price elasticity on a Kaggle ' +
      'retail dataset. A rule-based prescriptive engine translates model outputs into concrete markdown, ' +
      'full-price, or restock decisions. Deployed as a Streamlit app with a clean train/pipeline/app architecture.',
    longDescription:
      'The pipeline handles synthetic inventory correction for upstream data quality issues and uses ElasticNet ' +
      'for price-elasticity estimation. Prophet with additive regressors produces time-series demand forecasts. ' +
      'The prescriptive engine evaluates decision boundaries to recommend one of three actions per SKU: markdown, ' +
      'hold at full price, or restock. Deployed to HuggingFace Spaces via Streamlit.',
    tech: ['LightGBM', 'XGBoost', 'Prophet', 'ElasticNet', 'Streamlit', 'Pandas', 'Scikit-learn', 'Python'],
    hfSpace:     'https://YOUR_HF_USERNAME-retail-optimizer.hf.space', // 🔧 replace
    hfSpaceType: 'streamlit',
    github:      'https://github.com/saint-jeane/retail-optimizer',    // 🔧 confirm repo name
    status:      'live',
    featured:    true,
    year:        2025,
  },

  // ── 3. m4aDownloader ────────────────────────────────────────────────────
  {
    slug: 'm4a-downloader',
    title: 'm4aDownloader',
    tagline:
      'A desktop app that downloads audio and auto-tags it with artist, album, and cover-art metadata.',
    description:
      'A PySide6 desktop application that downloads audio via yt-dlp, retrieves metadata from ytmusicapi and ' +
      'the iTunes Search API, and ranks candidates with RapidFuzz fuzzy matching. Writes tags directly into ' +
      'M4A containers using mutagen and stores download history in SQLite. Packaged as a standalone Windows ' +
      'executable via PyInstaller.',
    longDescription:
      'A ~3,900-line, 23-file codebase with full inline documentation. The metadata pipeline queries multiple ' +
      'APIs in parallel, ranks candidates by RapidFuzz similarity score, then writes ID3-compatible tags ' +
      '(title, artist, album, cover art) directly into the M4A container. SQLite tracks download history to ' +
      'prevent duplicates across sessions.',
    tech: ['PySide6', 'yt-dlp', 'ytmusicapi', 'RapidFuzz', 'mutagen', 'SQLite', 'PyInstaller', 'Python'],
    github:  'https://github.com/saint-jeane/m4a-downloader', // 🔧 confirm repo name
    status:  'live',
    featured: true,
    year:    2024,
  },

  // ── 4. Offline Voice Assistant ──────────────────────────────────────────
  {
    slug: 'offline-voice-assistant',
    title: 'Offline Voice Assistant',
    tagline:
      'A fully offline, CPU-only voice assistant with sub-2-second glass-to-glass latency.',
    description:
      'An end-to-end pipeline using OpenWakeWord for wake-word detection, Faster-Whisper for speech-to-text, ' +
      'Ollama/Phi-3 as the LLM backbone, and Piper TTS for synthesis — all running on CPU with no API calls. ' +
      'Ships with a full pytest suite, GitHub Actions CI/lint/Docker/release workflows, and Docker Compose.',
    longDescription:
      'The pipeline: wake word → VAD → Faster-Whisper STT → Phi-3 generation → Piper TTS → sounddevice playback. ' +
      'All stages run fully offline on commodity hardware. Docker Compose provides a reproducible environment; ' +
      'GitHub Actions handles CI, linting, and release packaging.',
    tech: ['OpenWakeWord', 'Faster-Whisper', 'Ollama', 'Phi-3', 'Piper TTS', 'sounddevice', 'Docker', 'Python'],
    github:  'https://github.com/saint-jeane/offline-voice-assistant', // 🔧 confirm repo name
    status:  'live',
    featured: false,
    year:    2024,
  },
];
