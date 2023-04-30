# VisitCount

> **Warning**
>
> The service this project depends [CountAPI](https://countapi.xyz/) is down. So it will not work again.

![Visitors](https://visit-count.vercel.app/api/count?id=KiritaniAyaka.VisitCount)

A simple counter for readme page or webpage.

# How to use

You need a unique `id` for your counter.

Then add markdown fragment below into your page:

```md
![Visitors](https://visit-count.vercel.app/api/count?id=YourId)
```

## Best Practices

### Use in README

Compose the `id` like this: `UserName.RepoName` in readme of your repository.

Or in personal Profile README, use: `UserName`

### Use in webpage

If you want to use in webpage (such as blog, etc.), you should transform the url to `id` for each different article.

Like this:

> myblog.com/article/1  => `?id=myblog.com.article.1`
>
> myblog.com/article/1  => `?id=myblog.com-article-1`

Or any transform rules you like but you should **make sure different articles use different ids and no one else use the same id as you**

# Customize

## Custom Label

![Visitors](https://visit-count.vercel.app/api/count?id=YourId&label=Welcome)

```md
![Visitors](https://visit-count.vercel.app/api/count?id=YourId&label=Welcome)
```

## Custom Color

![Visitors](https://visit-count.vercel.app/api/count?id=YourId&labelColor=4b8bf5&color=pink)

```md
![Visitors](https://visit-count.vercel.app/api/count?id=YourId&labelColor=4b8bf5&color=pink)
```

You can use hex value or color name.

## Badge Style

![Visitors](https://visit-count.vercel.app/api/count?id=YourId&style=for-the-badge)

```md
![Visitors](https://visit-count.vercel.app/api/count?id=YourId&style=for-the-badge)
```

# Deploy

I'm using vercel serverless **free plan** to deploy this project on [https://visit-count.vercel.app/](https://visit-count.vercel.app/) that's the link you have seen above.

If there are too many requests send to it may down. (Cause **free plan**)

So if you have a lot of demand, you can fork this repository and deploy on Vercel.

Click this button to rapid deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/KiritaniAyaka/VisitCount)

# Referenced project

The idea of this project references [jwenjian/visitor-badge](https://github.com/jwenjian/visitor-badge) .
