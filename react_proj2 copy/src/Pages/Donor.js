import React from 'react';
import styles from './Donor.module.css'; // Assuming you have a CSS module for styling
import VerticalBarDemo from '../Components/VerticalBarDemo';  // Importing the VerticalBarDemo component
import PieChartDemo from '../Components/PieChartDemo'; // Importing the PieChartDemo component
import SampleImage from './Image1.jpg';
import SampleImage1 from './images 2.jpeg';
import SampleImage2 from './images 3.jpeg';
import SampleImage3 from './images 4.jpeg';
const Donor = () => {
  // Sample data for demonstration
  const donationHistory = [
    { id: 1, amount: 100, date: '2024-05-01', purpose: 'Education' },
    { id: 2, amount: 150, date: '2024-04-20', purpose: 'Healthcare' },
    { id: 3, amount: 200, date: '2024-04-10', purpose: 'Environmental Conservation' }
  ];

  const upcomingEvents = [
    { id: 1, name: 'Charity Gala', date: '2024-06-15', location: 'City Hall' },
    { id: 2, name: 'Fundraising Walkathon', date: '2024-07-20', location: 'Central Park' }
  ];

  const recommendedCauses = [
    { id: 1, name: 'Clean Water Initiative', description: 'Provide clean drinking water to communities in need' },
    { id: 2, name: 'Food Security Program', description: 'Combat hunger by supporting sustainable agriculture' }
  ];

  return (
    
    <div className={styles.donorDashboard}>
      <h2>Donor Dashboard</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
        <div className={styles.cardContent}>
      <h3>Events</h3>
    </div>
          <img src={SampleImage} alt="Sample Image 1" />
        </div>
        <div className={styles.card}>
        <div className={styles.cardContent}>
      <h3>Blood Donation</h3>
    </div>
          <img src={SampleImage1} alt="Sample Image 2" />
        </div>
        <div className={styles.card}>
        <div className={styles.cardContent}>
      <h3>Change a Life!</h3>
    </div>
          <img src={SampleImage2} alt="Sample Image 3" />
        </div>
        <div className={styles.card}>
        <div className={styles.cardContent}>
      <h3>Food Distribution!</h3>
    </div>
          <img src={SampleImage3} alt="Sample Image 4" />
        </div>
      </div>
      

      {/* Donation History Section */}
      <div className={styles.section}>
        <h3>Donation History</h3>
        <ul>
          {donationHistory.map(donation => (
            <li key={donation.id}>
              <span> Total Quantity Donated: {donation.amount}</span>
              <span>Date: {donation.date}</span>
              <span>Purpose: {donation.purpose}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Upcoming Events Section */}
      <div className={styles.section}>
        <h3>Upcoming Events</h3>
        <ul>
          {upcomingEvents.map(event => (
            <li key={event.id}>
              <span>Name: {event.name}</span>
              <span>Date: {event.date}</span>
              <span>Location: {event.location}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended Causes Section */}
      <div className={styles.section}>
        <h3>Recommended Causes</h3>
        <ul>
          {recommendedCauses.map(cause => (
            <li key={cause.id}>
              <span>Name: {cause.name}</span>
              <span>Description: {cause.description}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Chart Section */}
      <div className={styles.chartSection}>
        <div className={styles.chart}>
          <h3>Donation Trends - Vertical Bar Chart</h3>
          <VerticalBarDemo />
        </div>

        <div className={styles.chart}>
          <h3>Donation Distribution - Pie Chart</h3>
          <PieChartDemo />
        </div>
      </div>
    </div>
  );
};

export default Donor;
