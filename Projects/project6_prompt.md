**`Project 6 - AWS Static Website, Continued`**

### Enhancing Your Static Website
- For this project, we will be expanding on the static website created for Project 6.

### Requirements (100pts)
- Create a second S3 bucket to ensure requests are handled for both your root domain ([example.com](http://example.com)) and subdomain ([www.example.com](http://www.example.com)).
- Configure your subdomain bucket for website redirects to your root domain bucket.
- Add a Route53 alias record for your subdomain.
- Create a third S3 bucket for logging server traffic logs, and enable logging; with a retention of 30 days.
- Use AWS Certificate Manager and CloudFront to setup an SSL certificate for your domain.

### Bonus Points (0pts)
- N/A

### Expectations
- Each person in the class will demonstrate their project.
- You will have two weeks to create your project.
- When you demo your project, you will share your files and explain your code.

### Walk-through Guide/s
- The following example guide can be used for this project:
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html
- https://docs.aws.amazon.com/acm/latest/userguide/acm-public-certificates.html
