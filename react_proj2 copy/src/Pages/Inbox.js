import React, { useEffect, useState } from 'react';
import { Avatar, Button, List, Skeleton, Modal, Input } from 'antd';
const { TextArea } = Input;

const count = 3; // Change this to the number of initial notifications you want to display
const initialData = [
  {
    name: { last: 'Ali' },
    email: 'Ali.Bassyouni@gmail.com',
    content: 'I have chosen Donation post for Toy which has category board games',
    picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
    time: ' Sunday 5/11/2024  12:00'
  },
  {
    name: { last: 'Nour' },
    email:'Nour.Ahmed@gmail.com',
    content: 'I have chosen Donation post for fruit orange with quantity of 2 kilogram ',
    picture: { large: 'https://randomuser.me/api/portraits/women/2.jpg' },
    time: 'Monday 5/1/2024 10:00'
  },
  {
    name: { last: 'Ahmed' },
    email: 'Ahmed.Hassan@gmail.com',
    content: 'I have chosen Donation post for specific medical equipment that is used to treat minor injuries',
    picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg' },
    time: ' Tuesday 4/20/2024 8:00'
  },
  {
    name: { last: 'Jana' },
    email: 'jana.Mohamed@gmail.com',
    content: 'I have chosen Donation post that I can donate with blood type AB positive',
    picture: { large: 'https://randomuser.me/api/portraits/women/2.jpg' },
    time: ' Saturday 3/10/2024 2:00'
  },
  // Add more initial notifications as needed
];

const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [editContent, setEditContent] = useState('');
  
  useEffect(() => {
    setData(initialData);
    setList(initialData);
    setInitLoading(false);
  }, []);

  const handleEdit = (key, content) => {
    setEditingKey(key);
    setEditContent(content);
  };

  const handleSave = () => {
    // Handle saving edited content here, you can send it to a server or update state directly
    // For this example, I'll just log the edited content to console
    console.log("Edited content:", editContent);

    // After saving, clear editing state
    setEditingKey('');
    setEditContent('');
  };

  const onLoadMore = () => {
    setLoading(true);
    // Simulate loading more data (in a real scenario, you might fetch more data from a server)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
       
      </div>
    ) : null;

  return (
    <div>
      <h2>Notification Center</h2>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <span key="time">{item.time}</span>,
              
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name?.last}</a>}
                description={editingKey === item.email ? 
                  <TextArea rows={2} value={editContent} onChange={(e) => setEditContent(e.target.value)} /> 
                  : item.content}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default App;
