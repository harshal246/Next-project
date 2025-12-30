import { create } from "zustand";

export interface Products {
  id?: string;
  name?: string;
  mainCategory?: string;
  categories?: string[];
  price?: number;
  brand?: string;
  country?: string;
  stock?: number;
  reservedStock?: number;
  image?: string;
}

interface ReturnDataType{
  products:number[]
  stocks:number[]
  reservedStocks:number[]
}

interface ProductStore {
  Brand: string;
  category: string;
  search: string;
  dupli: Products[];
  p: Products[];

  addproduct: (product: Products) => void;
  filterByCategory: (category: string) => void;
  filterByBrand: (brand: string) => void;
  searching: (text: string) => void;
  resetProducts: () => void;
  setRes: (value: string, cat: "Brand" | "Category") => void;
  setReset: () => void;
  deleteProduct: (id: string) => void;
  updateProductFields: (id: string, fields: Partial<Products>) => void;
  getProductsData:()=> ReturnDataType
}
const products: Products[] = [
  {
    id: "p1",
    name: "Wireless Keyboard",
    mainCategory: "Electronics",
    categories: ["Electronics", "Accessories", "Office"],
    price: 1499,
    brand: "LogiTech",
    country: "China",
    stock: 120,
    reservedStock: 10,
    image:
      "https://imgs.search.brave.com/X5nlFGDVpQ2UNk4RUXLCnhMFrAsE085LZikrIyddvak/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMx/NzM0ODAwMy9waG90/by93aGl0ZS1zcG9y/dHMtc2hvZXMtb3Zl/ci1ibHVlLWJhY2tn/cm91bmQtc3BvcnRz/LWFuZC1jYXN1YWwt/Y2xvdGhpbmctc3R5/bGUtY29uY2VwdC1z/dW1tZXItb3IuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPTFz/eHc3U1R2SG1oYWhO/RlpjT0hIRGd2V29W/djV4cHNySVd4S1JB/eGxDRHM9",
  },
  {
    id: "p2",
    name: "Running Shoes",
    mainCategory: "Footwear",
    categories: ["Footwear", "Sports", "Men"],
    price: 2999,
    brand: "Nike",
    country: "Vietnam",
    stock: 250,
    reservedStock: 15,
    image:
      "https://imgs.search.brave.com/Yh98Sdd8_1TwsTOZwkh9KoLlEEqmNgXkKCjnKddoPeo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYWNl/b24uaW4vY2RuL3No/b3AvZmlsZXMvUGhv/dG9yb29tXzIwMjUw/MTIxXzEzMDE0OC5q/cGc_dj0xNzM3NDQ2/MTIzJndpZHRoPTEy/MDA",
  },
  {
    id: "p3",
    name: "Stainless Steel Water Bottle",
    mainCategory: "Home",
    categories: ["Home", "Kitchen", "Travel"],
    price: 799,
    brand: "Cello",
    country: "India",
    stock: 350,
    reservedStock: 20,
    image:
      "https://imgs.search.brave.com/r4vwRgBjIZxMHuVaQnM1NhsIH1uXVfIKBL0t1qin2fI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgwLzk3/LzhhLzgwOTc4YTEx/M2NiOTAyN2EyNDU2/YWQ3MDQwODgxOTU0/LmpwZw",
  },
  {
    id: "p4",
    name: "Bluetooth Headphones",
    mainCategory: "Electronics",
    categories: ["Electronics", "Audio", "Gadgets"],
    price: 2499,
    brand: "Sony",
    country: "Malaysia",
    stock: 180,
    reservedStock: 12,
    image:
      "https://imgs.search.brave.com/onzM7M_rW0DJvbrKLScyZBeYTX7HhUay4bTfLviXr5c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyNC8w/NC8xNy8xOC80MC9h/aS1nZW5lcmF0ZWQt/ODcwMjcyNl82NDAu/anBn",
  },
  {
    id: "p5",
    name: "Office Chair",
    mainCategory: "Furniture",
    categories: ["Furniture", "Office", "Home"],
    price: 5999,
    brand: "GreenSoul",
    country: "India",
    stock: 90,
    reservedStock: 8,
    image:
      "https://imgs.search.brave.com/UhRw5TztQ7rzjTnWZtaLpSp5dPr-EQ_NO5sCuB22Wl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/NS8wNi8wMS8zMy90/LXNoaXJ0LTc5NzMz/OTRfNjQwLmpwZw",
  },
  {
    id: "p6",
    name: "Digital Watch",
    mainCategory: "Accessories",
    categories: ["Accessories", "Fashion", "Wearables"],
    price: 1999,
    brand: "Casio",
    country: "Japan",
    stock: 300,
    reservedStock: 18,
    image:
      "https://imgs.search.brave.com/vK49HrBk5TrgRecQzv0DTjlWM2GziipNPZ7DlKuEHzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMy8wNS8wNi8wMS8zNC90LXNoaXJ0LTc5NzM0MDRfNjQwLmpwZw",
  },
  {
    id: "p7",
    name: "Gaming Mouse",
    mainCategory: "Electronics",
    categories: ["Electronics", "Gaming", "Accessories"],
    price: 1299,
    brand: "Razer",
    country: "China",
    stock: 220,
    reservedStock: 14,
    image:
      "https://imgs.search.brave.com/vK49HrBk5TrgRecQzv0DTjlWM2GziipNPZ7DlKuEHzY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMy8w/NS8wNi8wMS8zNC90/LXNoaXJ0LTc5NzM0/MDRfNjQwLmpwZw",
  },
  {
    id: "p8",
    name: "Cotton T-Shirt",
    mainCategory: "Clothing",
    categories: ["Clothing", "Men", "Casual"],
    price: 499,
    brand: "H&M",
    country: "Bangladesh",
    stock: 500,
    reservedStock: 30,
    image:
      "https://imgs.search.brave.com/EOGHZkxe1SBH-zS_Ie_oPKvCGtaTB9J8Q4kom5NPkmw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1ZXNpbHZlci5j/by5pbi9jZG4vc2hv/cC9maWxlcy9DVUY4/ME42Q1MxNklORkxf/NjAweC5qcGc_dj0x/NzYwMDcxODU5",
  },
  {
    id: "p9",
    name: "Ceramic Coffee Mug",
    mainCategory: "Home",
    categories: ["Home", "Kitchen", "Drinkware"],
    price: 299,
    brand: "ClayWorks",
    country: "India",
    stock: 270,
    reservedStock: 22,
    image:
      "https://imgs.search.brave.com/NyLWMIfQk14c7WL8kulfTSsHUDp-RiOyby6_Vt54Ybk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cm9zZWdvbGRhbmRi/bGFjay5jb20vY2Ru/L3Nob3AvYXJ0aWNs/ZXMvMTczMjY3MzIz/Nl9zaWx2ZXItbWVu/X3MtbmVja2xhY2Ut/c3RhY2tfYTQ2NTBl/NmYtZmQ1YS00NTBm/LWJlNjItOGFkOTEz/ZjQwMDg0XzEwMjR4/MTAyNC5qcGc_dj0x/NzY0MzM4NDcz",
  },
  {
    id: "p10",
    name: "Smart LED Bulb",
    mainCategory: "Electronics",
    categories: ["Electronics", "Home", "Smart Devices"],
    price: 699,
    brand: "Philips",
    country: "Poland",
    stock: 320,
    reservedStock: 25,
    image:
      "https://imgs.search.brave.com/c_q_MtUyUQ8khHiXuA14C4AGpmoPfySvzQPww8v37f4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJ1ZXNpbHZlci5j/by5pbi9jZG4vc2hv/cC9maWxlcy9DSDUw/OTQwUzI0SVNMLTFf/Y29weV82MDB4Lmpw/Zz92PTE3MTc3NDMz/Mzk",
  },
];


// export function dataForchart():chartDatatype{
//   const products:number[]=[]
//   const stocks:number[]=[]
//   const reservedStocks:number[]=[]

//   return {products,stocks,reservedStocks}

// }
// zustand data controller

export const productszu = create<ProductStore>((set, get) => ({
  Brand: "",
  category: "",
  search: "",
  dupli: products,
  p: products,
  addproduct: (n) => {
    set((state) => ({
      p: [...state.p, n],
      dupli: [...state.dupli, n],
    }));
  },
  filterByCategory: (category) =>
    set((state) => ({
      p: state.dupli.filter((item) => item.mainCategory?.includes(category)),
    })),
  filterByBrand: (text) =>
    set((state) => ({
      p: state.dupli.filter((item) => item.brand === text),
    })),
  searching: (text) => {
    set((state) => ({
      p: state.dupli.filter((item) => {
        return (
          item.name?.toLowerCase().includes(text.toLowerCase()) ||
          item.mainCategory?.includes(text) ||
          item.categories?.includes(text) ||
          item.brand?.includes(text)
        );
      }),
      search: text,
    }));
  },
  resetProducts: () => {
    const resetdata = get().dupli;
    set({ p: resetdata });
  },
  setRes: (value, cat) => {
    if (cat == "Brand") {
      set({ Brand: value });
    } else {
      set({ category: value });
    }
  },
  setReset: () => {
    const resetdata = get().dupli;
    set({
      p: resetdata,
      Brand: "",
      category: "",
      search: "",
    });
  },
  deleteProduct: (id:any) =>
    set((state) => ({
      p: state.p.filter((product) => product.id !== id),
      dupli: state.dupli.filter((product) => product.id !== id),
    })),
  updateProductFields: (id:string, fields:Products) => {
    set((state) => ({
      p: state.p.map((product) =>
        product.id === id ? { ...product, ...fields } : product
      ),
      dupli: state.dupli.map((product) =>
        product.id === id ? { ...product, ...fields } : product
      ),
    }));


  },
  getProductsData:()=>{
    const data=get().dupli
    const products:number[]=[]
    const reservedStocks:number[]=[]
    const stocks:number[]=[]
    for (let i=0;i<data.length;i++){products.push(i+1)}
    for (let i of data){
      if (typeof i.stock==="number" && typeof i.reservedStock==="number"){
        stocks.push(i.stock)
        reservedStocks.push(i.reservedStock)
      }
    }
    return {
      products,
      reservedStocks,
      stocks
    }
  }
}));
