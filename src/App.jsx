import React, { useState } from 'react'
import Card from './components/Card'
import Nav from './components/Nav'
import iphone_15_pro_max from './assets/iphone_15_pro_max.png'
import lava_o2 from './assets/lava_o2.jpg'
import nothing_2 from './assets/nothing_2.jpg'
import xiaomi_14_ultra from './assets/xiaomi_14_ultra.jpg'
import samsung_galaxy_s24 from './assets/samsung_galaxy_s24.jpg'
import pixel_8_pro from './assets/pixel_8_pro.jpg'

function App() {
  let data = [
    {
        image:'https://m.media-amazon.com/images/I/61BAuSC0UnL._SX679_.jpg',
        name:'OnePlus 12',
        company:'OnePlus',
        price:[64999,69999],
    },
    {
        image:iphone_15_pro_max,
        name:'iPhone 15 Pro Max',
        company:'Apple(IN)',
        price:[139990,168900],
    },
    {
        image:samsung_galaxy_s24,
        name:'Samsung Galaxy S24',
        company:'Samsung',
        price:[129999,139999],
    },
    {
        image:pixel_8_pro,
        name:'Pixel 8 Pro',
        company:'Google',
        price:[79999,83400],
    },
    {
        image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS9NLy1NhTeQFN03b1PFJbJSNVSwRk0AVCJR2IAUSWA3gcny6ehxq4YKDVu6Ijhe8bwiy5zwU8yBtJd_xrIu2FdopCjNGhHeHohvZe_dRSRT2lOfCukjsxg5A',
        name:'Huawei Pura 70',
        company:'Huawei Technologies',
        price:[73990,82800],
    },
    {
        image:nothing_2,
        name:'Nothing 2',
        company:'Nothing Technology',
        price:[37999,43281],
    },
    {
        image:xiaomi_14_ultra,
        name:'Xiaomi 14 Ultra',
        company:'Xiaomi',
        price:[92890,99999],
    },
    {
        image:lava_o2,
        name:'Lava O2',
        company:'Lava',
        price:[7999,9999],
    }
  ]
  let [count,setCount] = useState(0)
  return (
    <>
        <Nav count={count}/>
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Explore with passion</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Get your favourite one</p>
                </div>
            </div>
        </header>
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                    data.map((e,i)=>{
                    return <Card count={count} setCount={setCount} key={i} data={e}/>
                    })
                }
                </div>
            </div>
        </section>
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Shopify 2024</p></div>
        </footer>
    </>
  )
}

export default App
