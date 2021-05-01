import React, { useState, useCallback } from 'react';
import {
    Layout,
    Page,
    FooterHelp,
    Card,
    Link,
    Button,
    FormLayout,
    TextField,
    AccountConnection,
    ChoiceList,
    SettingToggle,
  } from '@shopify/polaris';
  import {ImportMinor} from '@shopify/polaris-icons';

// import './App.css';

export default function App() {
  const [title, setTitle] = useState('');

  const handleTitleChange = useCallback((value) => setTitle(value), []);

  return (
    <div className="App">
        <header>
            <h1>Welcome to The Shoppies!</h1>
        </header>
        <Card sectioned>
          <FormLayout>
            <TextField 
              value={title}
              label="Movie title" 
              onChange={handleTitleChange} 

            />
          </FormLayout>
        </Card>
    </div>
  );
}
