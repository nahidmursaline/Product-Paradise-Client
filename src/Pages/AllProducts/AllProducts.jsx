import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useProducts from '../../hooks/useProducts';
import AllProductsCard from '../AllProductsCard/AllProductsCard';

const AllProducts = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [products, loading] = useProducts();
    const [searchQuery, setSearchQuery] = useState('');
    
    const tech = products.filter(item => item.category === 'Tech');
    const fashion = products.filter(item => item.category === 'Fashion');
    const home = products.filter(item => item.category === 'Home');

    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    // Filter the colleges data based on the search query
    const filteredProducts = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='pt-20'>
            <div className='flex justify-center mb-4'>
                <input
                    type="text"
                    placeholder="Search by Product Name"
                    value={searchQuery}
                    onChange={handleSearch} // Use the handleSearchInputChange function
                    className="border border-pink-300 px-14 py-1 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className='flex justify-center'>
                    <TabList>
                        <Tab>All Products</Tab>
                        <Tab>Tech Products</Tab>
                        <Tab>Fashion Products</Tab>
                        <Tab>Home Products</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {filteredProducts.map(item => (
                            <AllProductsCard
                                key={item._id}
                                item={item}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {tech.map(item => (
                            <AllProductsCard
                                key={item._id}
                                item={item}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {fashion.map(item => (
                            <AllProductsCard
                                key={item._id}
                                item={item}
                            />
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
                        {home.map(item => (
                            <AllProductsCard
                                key={item._id}
                                item={item}
                            />
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default AllProducts;












