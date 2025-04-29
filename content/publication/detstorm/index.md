---
title: ' Investigating Physical Latency Attacks against Camera-based Perception '
authors:
- Raymond Muller
- Ruoyu Song
- Chenyi Wang
- Yuxia Zhan
- Jean-Philippe Monteuuis
- Yanmao Man
- Ming Li
- Ryan Gerdes
- Jonathan Petit
- Z. Berkay Celik
date: '2025-05-01'
publishDate: '2025-04-29T01:09:26.062201Z'
publication_types:
- paper-conference
publication: '* 2025 IEEE Symposium on Security and Privacy (SP) *'
doi: 10.1109/SP61157.2025.00236
abstract: " Camera-based perception is a central component to the visual perception
  of autonomous systems. Recent works have investigated latency attacks against perception
  pipelines, which can lead to a Denial-of-Service against the autonomous system.
  Unfortunately, these attacks lack real-world applicability, either relying on digital
  perturbations or requiring large, unscalable, and highly visible patches that cover
  up the victim's view. In this paper, we propose DetStorm, a novel physically realizable
  latency attack against camera-based perception. DetStorm uses projector perturbations
  to cause delays in perception by creating a large number of adversarial objects.
  These objects are optimized on four objectives to evade filtering by multiple Non-Maximum
  Suppression (NMS) approaches. To maximize the number of created objects in a dynamic
  physical environment, DetStorm takes a unique greedy approach, segmenting the environment
  into \\\"zones\\\" containing distinct object classes and maximizing the number
  of created objects per zone. DetStorm adapts to changes in the environment in real
  time, recombining perturbation patterns via our zone stitching process into a contiguous,
  physically projectable image. Evaluations in both simulated and real-world experiments
  show that DetStorm causes a 506% increase in detected objects on average, delaying
  perception results by up to 8.1 seconds, and capable of causing physical consequences
  on real-world autonomous driving systems. "
tags:
- ''
links:
- name: URL
  url: https://doi.ieeecomputersociety.org/10.1109/SP61157.2025.00236
---
