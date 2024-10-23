import React from 'react';

const PrivacyPolicy = () => {
    return (
        <div id="privacyPolicyContainer" style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h1 style={{ textAlign: 'center', color: '#4A90E2' }}>Privacy Policy</h1>
            <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '30px' }}>Effective Date: [Insert Effective Date]</p>
            
            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Introduction</h2>
            <p>
                Welcome to BookNest! Your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
            
            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Information We Collect</h2>
            <p>We may collect and process the following types of information about you:</p>
            <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
                <li><strong>Personal Information:</strong> When you create an account or interact with us, we may collect personal information such as your name, email address, phone number, and password.</li>
                <li><strong>Payment Information:</strong> If you make a purchase, we collect information necessary to process your payment, such as credit card numbers and billing addresses.</li>
                <li><strong>Usage Data:</strong> We may collect information about how you access and use our services, including your IP address, browser type, pages visited, and the time and date of your visit.</li>
                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track the activity on our service and store certain information.</li>
            </ul>
            
            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including but not limited to:</p>
            <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
                <li>Providing, maintaining, and improving our services.</li>
                <li>Processing your transactions and managing your orders.</li>
                <li>Communicating with you, including responding to your comments, questions, and requests.</li>
                <li>Personalizing your experience and providing tailored content and advertisements.</li>
                <li>Monitoring the usage of our services and analyzing trends to improve user experience.</li>
                <li>Complying with legal obligations and protecting our rights and the rights of others.</li>
            </ul>
            
            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Data Security</h2>
            <p>
                We take the security of your personal information seriously. We implement reasonable security measures to protect your data from unauthorized access, use, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security.
            </p>

            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Your Rights</h2>
            <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
                <li>The right to access and obtain a copy of your personal data.</li>
                <li>The right to request correction of inaccurate or incomplete data.</li>
                <li>The right to request deletion of your personal data under certain circumstances.</li>
                <li>The right to restrict or object to the processing of your personal data.</li>
                <li>The right to data portability.</li>
                <li>The right to withdraw consent at any time when we rely on your consent to process your personal data.</li>
            </ul>
            
            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Third-Party Services</h2>
            <p>
                We may employ third-party companies and services to facilitate our services ("Service Providers"), provide the service on our behalf, perform service-related tasks, or assist us in analyzing how our service is used. These third parties may have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Links to Other Websites</h2>
            <p>
                Our service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and terms of service of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>

            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Changes to This Privacy Policy</h2>
            <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>

            <h2 style={{ borderBottom: '2px solid #4A90E2', paddingBottom: '10px' }}>Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p>Email: support@booknest.com</p>
            <p>Address: [Insert Company Address]</p>
        </div>
    );
}

export default PrivacyPolicy;
