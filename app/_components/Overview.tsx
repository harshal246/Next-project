"use client"
import React, { useState, useEffect } from 'react'
import { Products, productszu } from '../_store/data'

interface overviewData {
  total: number,
  formated: string,
  sum: number
}

export function Overview(){
  const allProducts = productszu((state) => state.dupli)
  console.log(allProducts)
  const calculateSums = () => {
    let reservedSum = 0
    let totalRevenue = 0
    for (let i = 0; i < allProducts.length; i++) {
      const product = allProducts[i]
      if (typeof product.reservedStock==="number" || typeof product.reservedStock==="string"){
        reservedSum += parseFloat(product.reservedStock.toString()) || 0
      }
      if (typeof product.price==="number" ||typeof product.price==="string"){
        totalRevenue += parseFloat(product.price.toString()) || 0
      }
    }
    return { reservedSum, totalRevenue }
  }

  const { reservedSum, totalRevenue } = calculateSums()
  console.log(reservedSum,totalRevenue)
  const formatted = formatPriceToKM(totalRevenue)

  return (
    <div className="w-full p-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
  
      <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-400 to-violet-500 text-white shadow-sm border rounded-2xl p-6 shadow-lg border-2 flex flex-col justify-between p-4">
        <span className="text-sm font-medium text-white">
          Products
        </span>
        <span className="text-4xl mb-[10px] font-bold text-white">
          {allProducts.length}
        </span>
      </div>

      <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white rounded-2xl p-6 shadow-lg border-2 flex flex-col justify-between p-4">
        <span className="text-sm font-medium">
          Total products reserved
        </span>
        <span className="text-4xl mb-[10px] font-bold text-white">
          {reservedSum}
        </span>
      </div>

      <div className="h-[125px] rounded-2xl bg-gradient-to-br from-violet-600 to-violet-700 text-white rounded-2xl p-6 shadow-lg border-2 flex flex-col justify-between p-4">
        <span className="text-sm font-medium">
          Total Revenue
        </span>
        <span className="text-4xl mb-[10px] font-bold text-white">
          ${formatted}
        </span>
      </div>

    </div>
  )
}

function formatPriceToKM(price: number): string {
  if (price >= 1000000) {
    return (price / 1000000).toFixed(1) + 'M'
  } else if (price >= 1000) {
    return (price / 1000).toFixed(1) + 'K'
  }
  return price.toString()
}