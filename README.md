# Comparison of Hybrid Rendering Techniques

This monorepo contains a collection of React applications, each implemented using a different rendering technique. The goal is to compare these approaches in terms of performance, resource usage, and operational impact. The setup was created as part of a master’s thesis exploring rendering strategies in the React ecosystem.

## Projects

Each subdirectory in the monorepo contains the same application built with one of the following rendering techniques:

- **CSR** – Client-side Rendering  
- **SSR** – Server-side Rendering  
- **SSG** – Static Site Generation  
- **ISR** – Incremental Static Regeneration  
- **PSSR** – Progressive Server-side Rendering  
- **RSC** – React Server Components

## Purpose

These projects serve as a baseline for evaluating rendering techniques in a controlled, consistent environment. It aims to help developers and researchers understand how architectural decisions affect:

- User-perceived speed and experience
- System resource usage and costs
- Environmental impact

## Methodology

For detailed methodology and testing procedures, please refer to the full thesis linked below:

_link_

## Technologies

These projects were developed using the following technologies:

- React v19
- Next.js v15 (excluding CSR, which used Vite v6)
- Node.js v22
- Docker Engine v28 (the data server only)

## Attribution

Developed by Igor Stalmach as part of a _"Comparison of Hybrid Rendering Techniques"_ master's thesis on rendering strategies in React.
