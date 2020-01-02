# What's new in AWS

[https://aws.amazon.com/blogs/aws/](https://aws.amazon.com/blogs/aws/),
[https://aws.amazon.com/new/](https://aws.amazon.com/new/),
[https://aws.amazon.com/blogs/mt/](https://aws.amazon.com/blogs/mt/)

## Elasticsearch 5.5

[https://aws.amazon.com/about-aws/whats-new/2017/09/elasticsearch-5_5-now-available-on-amazon-elasticsearch-service/](https://aws.amazon.com/about-aws/whats-new/2017/09/elasticsearch-5_5-now-available-on-amazon-elasticsearch-service/)

* Support for Elasticsearch 5.5 and Kibana 5.5

* Faster performance, Kibana 5.5 Enhancements, Self-service restore from
  automated snapshots

![Create Elasticsearch domain](https://raw.githubusercontent.com/awsugcz/awsug.cz/master/static/presentations/2017-09-20/img/Create_Elasticsearch_domain.png
"Create Elasticsearch domain")

## Route 53 - Support for logging

[https://aws.amazon.com/about-aws/whats-new/2017/09/amazon-route-53-announces-support-for-dns-query-logging/](https://aws.amazon.com/about-aws/whats-new/2017/09/amazon-route-53-announces-support-for-dns-query-logging/)

* Capability to easily log DNS queries received by Amazon Route 53 through
  integration with CloudWatch Logs

## Network Load Balancer (NLB)

[https://aws.amazon.com/blogs/aws/new-network-load-balancer-effortless-scaling-to-millions-of-requests-per-second/](https://aws.amazon.com/blogs/aws/new-network-load-balancer-effortless-scaling-to-millions-of-requests-per-second/)

* Millions of requests per second, high throughput at ultra low latency

* Source Address Preservation - original source IP address and source ports for
  the incoming connections remain unmodified, so application software need not
  support X-Forwarded-For, proxy protocol, or other workarounds

* Long-running Connections - can handle connections that are open for months
  or years, making them a great fit for IoT, gaming, and messaging applications

![Network Load Balancer (NLB)](https://media.amazonwebservices.com/blog/2017/nlb_choose_type_2.png
"Network Load Balancer (NLB)")

## VMware Cloud on AWS

[https://aws.amazon.com/blogs/aws/vmware-cloud-on-aws-now-available/](https://aws.amazon.com/blogs/aws/vmware-cloud-on-aws-now-available/)

* Runs the VMware SDDC stack directly on bare-metal AWS infrastructure

* VMware and third-party management tools like vCenter Server, PowerCLI,
  the vRealize Suite will work the same

![VMware Cloud on AWS](https://media.amazonwebservices.com/blog/2017/vmware_aws_wide_slide_2.png
"VMware Cloud on AWS")

## Encryption of Data for Amazon Elastic File System (EFS)

[https://aws.amazon.com/blogs/aws/new-encryption-at-rest-for-amazon-elastic-file-system-efs/](https://aws.amazon.com/blogs/aws/new-encryption-at-rest-for-amazon-elastic-file-system-efs/)

* Encrypt the contents of the files that you store on the file system (AES-256)

![Encryption of Data for Amazon Elastic File System (EFS)](https://media.amazonwebservices.com/blog/2017/efs_set_ear_3.png
"Encryption of Data for Amazon Elastic File System (EFS)")

![Encryption of Data for Amazon Elastic File System (EFS)](https://media.amazonwebservices.com/blog/2017/efs_fs_stat_3.png
"Encryption of Data for Amazon Elastic File System (EFS)")

## High-Resolution Custom Metrics and Alarms for Amazon CloudWatch

[https://aws.amazon.com/blogs/aws/new-high-resolution-custom-metrics-and-alarms-for-amazon-cloudwatch/](https://aws.amazon.com/blogs/aws/new-high-resolution-custom-metrics-and-alarms-for-amazon-cloudwatch/)

* [CloudWatch](http://aws.amazon.com/cloudwatch/) with 1-second resolution
  (it's for 5 minutes by default and every minute for "[Detailed Monitoring](https://aws.amazon.com/blogs/aws/amazon-cloudwatch-basic-monitoring-for-ec2-at-no-charge/)")

![High-Resolution Custom Metrics and Alarms for Amazon CloudWatch](https://media.amazonwebservices.com/blog/2017/cwhr_graph_zoom_1.png
"High-Resolution Custom Metrics and Alarms for Amazon CloudWatch")

## Application Load Balancing via IP Address to AWS & On-Premises Resources

[https://aws.amazon.com/blogs/aws/new-application-load-balancing-via-ip-address-to-aws-on-premises-resources/](https://aws.amazon.com/blogs/aws/new-application-load-balancing-via-ip-address-to-aws-on-premises-resources/)

* Layer 7 (application) routing to EC2 instances and to microservices running
  in containers

* Customers need hybrid applications when spreading traffic across a combination
  of existing on-premises resources and new resources running in the AWS Cloud

![target type](https://media.amazonwebservices.com/blog/2017/alb_target_type_2.png
"target type")

## Amazon EC2 Elastic GPUs

[https://aws.amazon.com/blogs/aws/in-the-work-amazon-ec2-elastic-gpus/](https://aws.amazon.com/blogs/aws/in-the-work-amazon-ec2-elastic-gpus/),
([https://aws.amazon.com/blogs/aws/new-ec2-elastic-gpus-for-windows/](https://aws.amazon.com/blogs/aws/new-ec2-elastic-gpus-for-windows/))

* Attach low-cost graphics acceleration to a wide range of EC2 instances over
  the network

* Easy as attaching Amazon EBS volumes

* Supports OpenGL 3.3 and offer up to 8GiB of GPU memory (Amazon-optimized
  OpenGL library needs to be installed)

* Used for virtual desktops, gaming or industrial design

* Windows only, using network (ENI) ([faqs](https://aws.amazon.com/ec2/elastic-gpus/faqs/))

* When applications make OpenGL API calls for 3D operations, the Amazon OpenGL
  library re-directs those calls to the Elastic GPU over the network, where
  the operations are processed and results are returned back to the library

[![Amazon EC2 Elastic GPUs](https://img.youtube.com/vi/9EUkuH-pgfs/0.jpg)](https://www.youtube.com/watch?v=9EUkuH-pgfs)

## Per-Second Billing for EC2 Instances and EBS Volumes

[https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/](https://aws.amazon.com/blogs/aws/new-per-second-billing-for-ec2-instances-and-ebs-volumes/)

* Effective October 2nd, usage of Linux instances / EBS volumes will be billed
  in one-second increments instead of hours

## Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs

[https://aws.amazon.com/about-aws/whats-new/2017/09/amazon-aurora-enables-database-activity-monitoring-with-cloudwatch-logs/](https://aws.amazon.com/about-aws/whats-new/2017/09/amazon-aurora-enables-database-activity-monitoring-with-cloudwatch-logs/)
[https://aws.amazon.com/blogs/database/monitoring-amazon-aurora-audit-events-with-amazon-cloudwatch/](https://aws.amazon.com/blogs/database/monitoring-amazon-aurora-audit-events-with-amazon-cloudwatch/)

* Events recorded in Amazon Aurora (such as database logins, user information,
  details of queries executed, and impacted tables) may log to CloudWatch

![Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2017/09/08/Search-Logs.jpg
"Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs")

![Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs](https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2017/09/11/Define-Pattern1.jpg
"Amazon Aurora Enables Database Activity Monitoring with CloudWatch Logs")

## Stop & Resume Workloads on EC2 Spot Instances

[https://aws.amazon.com/blogs/aws/new-stop-resume-workloads-on-ec2-spot-instances/](https://aws.amazon.com/blogs/aws/new-stop-resume-workloads-on-ec2-spot-instances/)

* Set up Spot bids and Spot Fleets that respond by stopping
  (rather than terminating) instances when capacity is no longer available
  at or below your bid price

* EBS volumes attached to stopped instances remain intact, as does the
  EBS-backed root volume

![Stop & Resume Workloads on EC2 Spot Instances](https://media.amazonwebservices.com/blog/2017/spot_set_stop_1.png
"Stop & Resume Workloads on EC2 Spot Instances")
