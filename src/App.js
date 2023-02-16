import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getDocs } from 'firebase/firestore';
import { docRef } from './firebase-config';

import './components/components-styles/pages-styles.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Categories from './components/pages/Categories';
import Digestif from './components/pages/Digestif';
import Wine from './components/pages/Wine';
import Aperitif from './components/pages/Aperitif';
import AllDrinks from './components/pages/AllDrinks';
import CardDetails from './components/cards/CardDetails';
import Addtem from './components/Addtem';
import Footer from './components/Footer';

export default function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const getDrinks = async () => {
      const docRefData = await getDocs(docRef);

      setdata(docRefData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDrinks();
  }, []);

  return (
    <div className='App-wrapper'>
      <Nav />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='admin' element={<Addtem />} />

          <Route
            path='categories'
            element={<Categories products={data && data} />}>
            <Route index element={<AllDrinks products={data && data} />} />
            <Route path='wine' element={<Wine products={data && data} />} />
            <Route
              path='digestif'
              element={<Digestif products={data && data} />}
            />
            <Route
              path='aperitif'
              element={<Aperitif products={data && data} />}
            />
            <Route path=':id' element={<CardDetails />} />
          </Route>

          <Route
            path='*'
            element={
              <h3 className='alert alert-danger text-center'>ERROR - 404</h3>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
