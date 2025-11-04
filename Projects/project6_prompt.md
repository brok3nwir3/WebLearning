**`Project 6 - AWS Static Website, Part 2`**

### Enhancing Your Static Website
- For this project, we will be expanding on the static website created for Project 6.

### Requirements (90pts)
- Create a second S3 bucket to ensure requests are handled for both your root domain ([example.com](http://example.com)) and subdomain ([www.example.com](http://www.example.com)).
- Configure your subdomain bucket for website redirects to your root domain bucket (refer to the guide below).
- Add a Route 53 alias record for your subdomain.
- Create a third S3 bucket for logging server traffic logs, and enable logging.
- Use AWS Certificate Manager to request a new public certificate for your domain name.
- Create a new CloudFront distribution for your domain, pointed at your S3 bucket, and utilizing your public certificate.
- Lastly, update your Route 53 DNS records to point to your CloudFront distribution, via your distribution General Tab.

### Bonus Points (10pts)
- Create a Lifecycle rule for your server logging bucket (i.e. delete logs older than 30 days).
- Add a `robots.txt` file to your website.
- Create a CloudFormation template for your infrastructure.

### Expectations
- Each person in the class will demonstrate their project.
- You will have two weeks to create your project.
- When you demo your project, you will share your files and explain your code.

### Walk-through Guide/s
- The following example guide can be used for this project:
- https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html
- https://docs.aws.amazon.com/acm/latest/userguide/acm-public-certificates.html
