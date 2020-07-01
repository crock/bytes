---
type: "blog"
date: "2018-08-10"
title: "Programmatically checking Steam username availability"
---
Sometimes you need to find an easy and reliable way to do something without resorting to using an official API for various reasons such as distributing an amateur-focused script or program. 
<!-- end -->
Explaining how to obtain API keys is often too much of a hassle. Other times, the service might not provide a convenient endpoint for getting the information you need.

That's when we can use our detective skills to build our own method as we will learn today. In this tutorial, I'll show you step-by-step how to make a simple Python script to check whether or not a specific Steam ID is available. 

Steam IDs are in the following format:
```
https://steamcommunity.com/id/[name]
```

The best method I found to do this is to make a HTTP GET request to the profile url seen above and parse the HTML response to check for the existence of a specific phrase. ~~As of the time of this writing, only error pages contain an H3 element, thus you can safely assume that the Steam ID is available for claiming if it exists. If it doesn't exist, that means it found a profile with that ID, so it is not available to claim.~~

I have fully commented the source code in the Gist linked below to explain what each part does.

https://gist.github.com/crock/b6e9deee0732f67f818f5a7981b5e3af

If you have any relevant questions at all, please leave a comment on this post with your question and I will be happy to answer them.

**Update 2018/08/10:** I have changed the method I’m using to check availability to check for a specific phrase rather than an H3 element. 