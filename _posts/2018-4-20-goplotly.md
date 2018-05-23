---
layout: post
title: go-plotly
description: gRPC Plotting Microservice
categories: Go, Docker, gRPC, websocket, google-cloud-platform, plotly
image: assets/images/chart.jpeg
---

# go-plotly

<a href="http://chart.endpoints.go-plotly.cloud.goog" target="_blank">go-plotly</a> is a simple, free to use plotting microservice. Connect to go-plotly with a gRPC connection and plot graphs in real time. I made this service in response to the lack of anything offering similar functionality, particularly for Go, at the time of writing.

## Summary

go-plotly is built on top of <a href="https://plot.ly" target="_blank">plot.ly</a> and offers similar functionalities to it's API, without their restrictions. go-plotly uses a combination of <a href="https://grpc.io" target="_blank">gRPC</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" target="_blank">websocket</a> technology to create an easy to use, reliable microservice that delivers near instantaneous transmission of data between a client and a graph and overcomes the 50ms throttle imposed by plot.ly.

Plus, did I mention that it is COMPLETELY free? For usage details, please refer to the <a href="https://github.com/ykaseng/go-charter-API" target="_blank">documentation</a>. Here's an <a href="https://github.com/ykaseng/go-chater-example-client" target="_blank">example client</a> written in Go.