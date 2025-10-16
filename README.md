# Title Analysis System Documentation

A comprehensive technical documentation site for the Title Analysis System - a LangGraph-based AI Pipeline for ALTA Title Commitments.

## Overview

This documentation provides detailed technical specifications, architecture diagrams, and implementation guides for the Title Analysis System. The system processes title documents using AI to generate ALTA title commitments with high accuracy and efficiency.

## Features

- **Interactive Navigation**: Sidebar navigation with organized sections
- **Comprehensive Coverage**: 12 major sections covering architecture, implementation, and optimization
- **Technical Details**: Complete step-by-step workflows, data schemas, and performance metrics
- **AI-First Approach**: Detailed documentation of AI-driven improvements and future enhancements

## Sections

### Overview
- **1.0 Architecture**: System architecture and technology stack
- **2.0 Workflow Layers**: 6-layer processing pipeline
- **3.0 Three-Pass Strategy**: Multi-pass analysis approach

### Implementation
- **4.0 Data Flow**: State management and data persistence
- **5.0 Step Reference**: Complete workflow step documentation
- **6.0 Satisfaction Algorithm**: Deterministic satisfaction matching

### Optimization
- **7.0 Decision Points**: Critical system decisions and trade-offs
- **8.0 Bottlenecks**: Performance analysis and bottlenecks
- **9.0 Improvements**: AI-first improvement roadmap

### Reference
- **10.0 Prompt Strategy**: Prompt engineering and validation
- **11.0 Data Schemas**: Complete data structure documentation
- **12.0 Metrics**: Performance metrics and success criteria

## Technology Stack

- **Orchestration**: LangGraph (StateGraph)
- **LLM Engine**: Google Gemini 2.5 Pro via Vertex AI
- **State Persistence**: PostgreSQL with AIData table
- **Concurrency**: Python asyncio
- **Schema Validation**: Pydantic
- **Object Storage**: Google Cloud Storage

## Performance Targets

- **Accuracy**: 85% (currently 70%)
- **Processing Time**: 10 minutes for 500 documents (currently 25 minutes)
- **LLM Calls**: 200 calls (currently 500+)
- **Token Usage**: 800K tokens (currently 2M)

## Getting Started

1. Clone this repository
2. Open `title-analysis-system-viz.html` in your browser
3. Use the sidebar navigation to explore different sections

## Deployment

This documentation is deployed via GitHub Pages. The site is automatically updated when changes are pushed to the main branch.

## Contributing

This is internal documentation for the Title Analysis System. For updates or corrections, please follow the standard development workflow.

## License

Internal use only - Title Analysis System Documentation
