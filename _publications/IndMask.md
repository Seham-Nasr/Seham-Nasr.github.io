---
title: "IndMask: Inductive Explanation for Multivariate Time Series Black-box Models"
collection: publications
category: manuscripts
permalink: /publication/IndMask
excerpt: 'This paper is about Explainable AI for time series'
date: 2024-10-20
venue: 'ECAI conference'
paperurl: 'https://paperswithcode.com/paper/indmask-inductive-explanation-for'
citation: 'Seham, Nasr. (2024)."IndMask" <i>ECAI conference</i>. 1(1).'
---
Authors: Seham Nasr, Sandipan Sikdar

# Abstract
In this paper, we introduce IndMask, a framework for explaining decisions of black-box time series models. While there exists a plethora of methods for providing explanations of machine learning models, time series data requires additional considerations. One needs to consider the time aspect in the explanations as well as deal with a large number of input features. Recent work has proposed explaining a time series prediction by generating a mask over the input time series. Each entry in the mask corresponds to an importance score for each feature at each time step. However, these methods only generate instancewise explanations, which means a mask needs to be computed for each input individually, thereby making them unsuited for inductive settings, where explanations need to be generated for numerous inputs, and instancewise explanation generation is severely prohibitive. Additionally, these methods have mostly been evaluated on simple recurrent neural networks and are often only applicable to a specific downstream task. Our proposed framework IndMask addresses these issues by utilizing a parameterized model for mask generation. We also go beyond recurrent neural networks and deploy IndMask to transformer architectures, thereby genuinely demonstrating its model-agnostic nature. The effectiveness of IndMask is further demonstrated through experiments over real-world datasets and time series classification and forecasting tasks. It is also computationally efficient and can be deployed in conjunction with any time series model.
