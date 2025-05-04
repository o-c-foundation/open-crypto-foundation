import React from 'react'
import { FaShieldAlt, FaServer, FaLock, FaCheckCircle, FaFileAlt } from 'react-icons/fa'
import Layout from '../../../components/Layout'

interface ComplianceSection {
  title: string
  content: string
  icon?: React.ReactNode
}

const ComplianceSection: React.FC<{ section: ComplianceSection }> = ({ section }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      {section.icon && <span className="mr-3 text-primary">{section.icon}</span>}
      <h2 className="text-xl font-bold text-white">{section.title}</h2>
    </div>
    <div className="pl-8 text-gray-300">
      {section.content.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-4">{paragraph}</p>
      ))}
    </div>
  </div>
)

const ProductCompliance = () => {
  const sections: ComplianceSection[] = [
    {
      title: 'Executive Summary',
      icon: <FaFileAlt />,
      content: `Report Period: January 1, 2023 – September 30, 2023\n\nAWS Account ID: 062961893548\n\nAWS Account Name: hashcashconsultants\n\nReport Prepared By: Pritam Roy\n\nDate of Report Preparation: September 22, 2023`
    },
    {
      title: 'Scope and Objectives',
      icon: <FaShieldAlt />,
      content: `Scope of Examination: This compliance report covers the examination of controls related to AWS service use in the US West (N. California) Main Region (most services), Europe (Ireland) & Asia Pacific (Tokyo) (specific EC2 instances), and US East (N. Virginia) (SES and SNS).\n\nObjectives: The objectives of this report are to evaluate the effectiveness of controls related to security, availability, processing integrity, confidentiality, and privacy.`
    },
    {
      title: 'AWS Services in Scope',
      icon: <FaServer />,
      content: `AWS Services in Scope:\n\n• AWS EC2\n• AWS S3\n• AWS IAM (Identity and Access Management)\n• AWS VPC (Virtual Private Cloud)\n• AWS VPN (Virtual Private Network)\n• AWS NACL (Network Access Control Lists)\n• AWS Security Groups\n• AWS KMS (Key Management Service)\n• AWS SES (Simple Email Service)\n• AWS SNS (Simple Notification Service)\n• AWS Secrets Manager\n• AWS Security Hub\n• AWS WAF & Shield\n• AWS Macie\n• AWS SSM (Systems Manager)\n• AWS Route 53\n• AWS SQS (Simple Queue Service)\n• AWS IAM Roles & Policies\n• AWS MFA (Multi-Factor Authentication)\n• AWS CloudWatch\n• AWS CloudTrail\n• AWS VPC Flow Logs\n\nRegions:\n\n• US West (N. California) Main Region: Utilized for most AWS services.\n• Europe (Ireland) & Asia Pacific (Tokyo): Used for specific EC2 instances.\n• US East (N. Virginia): Utilized for SES and SNS.`
    },
    {
      title: 'Infrastructure Overview',
      icon: <FaServer />,
      content: `Our AWS infrastructure is designed to ensure security, availability, and data protection. It comprises multiple data centres across the Mumbai Main Region, Singapore (specifically for some EC2 services), and North Virginia (for SES and SNS). Key aspects of our infrastructure include:\n\nNetwork Architecture: We utilize Amazon Virtual Private Cloud (VPC) to create isolated network environments. VPC peering and VPNs are employed for secure communication.\n\nData Centres: Our data centres are distributed to enhance availability and disaster recovery capabilities. Redundancy and failover mechanisms are implemented.\n\nSecurity Measures: Security groups, Network Access Control Lists (NACLs), and AWS WAF & Shield protect against unauthorized access and DDoS attacks. Key management is handled through AWS Key Management Service (KMS).`
    },
    {
      title: 'Control Objectives',
      icon: <FaLock />,
      content: `Our control objectives encompass various aspects of security, availability, data protection, and compliance for the AWS services within scope:\n\nSecurity: Ensure that all AWS resources are securely configured and monitored for any suspicious activity.\n\nAvailability: Maintain high availability by employing redundancy and failover mechanisms.\n\nData Protection: Safeguard sensitive data through encryption, access controls, and regular backups.\n\nCompliance: Adhere to industry-specific compliance requirements and best practices.`
    },
    {
      title: 'Control Activities',
      icon: <FaCheckCircle />,
      content: `We have implemented the following control activities and policies for each control objective:\n\nSecurity: Regularly review and update security group rules and NACL configurations. Conduct security audits and vulnerability assessments.\n\nAvailability: Utilize AWS Auto Scaling for dynamic resource provisioning. Implement Elastic Load Balancers (ELBs) for distributing traffic.\n\nData Protection: Enforce encryption-at-rest and in-transit using AWS KMS and SSL/TLS. Data is backed up to Amazon S3 with versioning enabled.\n\nCompliance: Periodically review AWS compliance reports and ensure our environment aligns with relevant compliance standards.`
    },
    {
      title: 'Control Testing',
      icon: <FaShieldAlt />,
      content: `Control testing was conducted using a combination of automated tools and manual assessments. Methodologies included vulnerability scanning, penetration testing, and reviewing AWS CloudTrail logs.\n\nSampling was performed on a representative subset of AWS resources. Test results indicated that controls were effectively configured and monitored.`
    },
    {
      title: 'Control Effectiveness',
      icon: <FaCheckCircle />,
      content: `Controls were evaluated for their effectiveness in mitigating risks. Results showed that controls are achieving their intended objectives and providing a robust security posture.`
    },
    {
      title: 'Control Exceptions',
      icon: <FaFileAlt />,
      content: `No control exceptions were identified during testing. All controls were found to be in compliance with defined policies.`
    },
    {
      title: 'Conclusion',
      icon: <FaCheckCircle />,
      content: `In conclusion, our AWS infrastructure demonstrates a strong commitment to security, availability, data protection, and compliance. Control testing indicates that our controls are robust and effective.`
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Product Compliance</h1>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <ComplianceSection key={index} section={section} />
        ))}
      </div>
    </div>
  )
}

ProductCompliance.getLayout = (page: ReactElement) => (
  <Layout title="Product Compliance | Open Exchange Legal">
    {page}
  </Layout>
)

export default ProductCompliance 