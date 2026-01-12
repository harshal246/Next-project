"use client"
import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { TrendingUp, Package, AlertCircle, DollarSign, Zap, CheckCircle, Clock, BarChart3 } from 'lucide-react';
import { Products, productszu } from '@/app/_store/data';



interface StockItem {
  category?: string;
  stock?: number;
  reserved?: number;
  available?: number;
}

interface TrendItem {
  month: string;
  stock: number;
  sold: number;
  reserved: number;
}

interface CategoryItem {
  name: string;
  value: number;
  percentage: number;
  [key: string]: string | number;
}

interface PriceItem {
  range: string;
  products: number;
  stock: number;
}

interface LowStockItem {
  name: string;
  stock: number;
  category: string;
}

interface KPICardProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  bgColor: string;
  iconColor: string;
}

export default function InventoryDashboard(){
  const alllogged=JSON.parse(localStorage.getItem("users")||"[]")
  const allProducts = productszu((state) => state.dupli)
  const totalavailable = allProducts.reduce((sum, product) => sum + (product.available??0),0)
  const totalsold = allProducts.reduce((sum, product) => sum + (product.sold??0),0)
  const lowstockitems=allProducts.filter((itm,indx)=>(itm.stock??0)<=15)
  console.log(lowstockitems)
  const stockdata: StockItem[] = first(allProducts)
  const categoryDistribution: CategoryItem[] = second(allProducts)
  const priceDistribution: PriceItem[] = third(allProducts)
  const colors = [
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#5b21b6',
    '#a78bfa', '#8b5cf6', '#7c3aed', '#6d28d9', '#7d5ba6'
  ];

  const KPICard = ({label, value, bgColor, iconColor }:KPICardProps) => (
    <div className="rounded-2xl p-6 shadow-lg border-2" style={{ backgroundColor: bgColor, borderColor: iconColor }}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-sm font-medium opacity-90">{label}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
        </div>
      </div>
    </div>
  );
  
  return (
    <div className="p-8 w-[95%] h-screen inline-block absolute top-0 overflow-y-scroll">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          Inventory dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <KPICard icon={Package} label="Total Products" value={allProducts.length.toString()} bgColor="#a78bfa" iconColor="#ffffff" />
        <KPICard icon={Zap} label="Total available stocks" value={totalavailable.toString()} bgColor="#8b5cf6" iconColor="#ffffff" />
        <KPICard icon={Clock} label="Total sold" value={totalsold.toString()} bgColor="#7c3aed" iconColor="#ffffff" />
        <KPICard icon={CheckCircle} label="Stock Issues" value={lowstockitems.length.toString()} bgColor="#6d28d9" iconColor="#ffffff" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white bg-white border-2 border-violet-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Stocks by the category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stockdata}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="category"/>
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: '#f8f4ff', border: '1px solid #a78bfa'}}
              />
              <Legend />
              <Bar dataKey="available" fill="#a78bfa" radius={[8, 8, 0, 0]} />
              <Bar dataKey="reserved" fill="#7c3aed" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        

        <div className="bg-white border-2 border-violet-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Category Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryDistribution.map(item => ({
                  ...item,
                  value: item.percentage,  
                  name: item.mainCategory
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => {
                  console.log(name,value)
                  return `${name} ${value}%`;
                }}
                outerRadius={100}
                fill="#8b5cf6"
                dataKey="value"
              >
                {categoryDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#f8f4ff', border: '1px solid #a78bfa' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white border-2 border-violet-200 rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Price Range Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={priceDistribution}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: '#f8f4ff', border: '1px solid #a78bfa' }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="stock" 
                fill="#a78bfa" 
                stroke="#8b5cf6"
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="products" 
                fill="#7c3aed" 
                stroke="#6d28d9"
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white bg-white border-2 border-violet-200 rounded-2xl shadow-lg p-6 flex flex-col overflow-y-scroll">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent user's</h2>
          <div className='flex flex-row border-b-2 border-violet-200'>
          <div className='flex flex-2'>ID'S</div>
          <div className='flex flex-1'>Users</div>
          </div>
          {}
          {alllogged.map(((itm:any,indx:number)=>{
            return (
              <div className='flex flex-row pt-[10px] border-b-2 border-violet-200 pb-[10px]'>
            <div className='flex flex-2 pl-[10px]'>{indx+1}</div>
            <div className='flex flex-1'>{itm.username}</div>
          </div>
            )
          }))}
          {/* <div className='flex flex-row pt-[10px]'>
            <div className='flex flex-2 pl-[10px]'>1</div>
            <div className='flex flex-1'>Harhsal</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function first(allProducts:any) {
  const result:StockItem[] = [];
  for (let i = 0; i < allProducts.length; i++) {
    const { mainCategory, stock, reservedStock, available } = allProducts[i];
    const exists = result.find(item => item.category === mainCategory);
    if (!exists) {
      result.push({
        category: mainCategory,
        stock: stock,
        reserved: reservedStock,
        available: available
      });
    }
  }
  return result;
}
function second(data:any){
  let products:any=[];
  for (let i=0;i<data.length;i++){
    const {mainCategory}=data[i]
    const filter=data.filter((item:any)=>item.mainCategory===mainCategory)
    const value = filter.reduce((sum:number, item:any) => sum + item.price, 0);
    const percentage=(filter.length/data.length)*100
    const d={mainCategory,value,percentage}
    if (!products.some((p: any) => p.mainCategory === mainCategory)) {
      products.push(d);
    }
 }
  return products
}

function third(data: any) {
  const priceMap = new Map();
  for (let i = 0; i < data.length; i++) {
    const { priceRange, stock, products: productCount } = data[i];
    if (!priceMap.has(priceRange)) {
      priceMap.set(priceRange, { range: priceRange, stock: 0, products: 0 });
    }
    const current = priceMap.get(priceRange);
    current.stock += stock;
    current.products += productCount;
  }
  const result = Array.from(priceMap.values());
  return result;
}