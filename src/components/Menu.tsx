/*
  Menu.tsx
  --------
  Full menu with tab navigation.
  Click a category tab to filter the items shown.
  Categories: Starters, Mains, Breads & Rice, Desserts, Drinks
*/

import { useState } from 'react';
import './Menu.css';

// Type for a single menu item
interface MenuItem {
  name: string;
  desc: string;
  price: string;
  veg: boolean;   // true = vegetarian (green dot), false = non-veg (red dot)
  tags?: string[];
}

// Type for a category tab
interface Category {
  id: string;
  label: string;
  icon: string;
  items: MenuItem[];
}

const CATEGORIES: Category[] = [
  {
    id: 'starters',
    label: 'Starters',
    icon: '🥗',
    items: [
      { name: 'Samosa (2 pcs)',          desc: 'Crispy pastry filled with spiced potatoes and peas.',                    price: '₹180', veg: true,  tags: ['Popular'] },
      { name: 'Chicken 65',              desc: 'Deep-fried chicken with curry leaves and chillies.',                     price: '₹320', veg: false, tags: ['Spicy'] },
      { name: 'Paneer Tikka',            desc: 'Marinated cottage cheese grilled in the tandoor.',                       price: '₹380', veg: true  },
      { name: 'Fish Amritsari',          desc: 'Battered fish fried golden with ajwain and chaat masala.',               price: '₹420', veg: false },
      { name: 'Hara Bhara Kabab',        desc: 'Spinach & green-pea patties, crispy outside and soft inside.',          price: '₹260', veg: true,  tags: ['Healthy'] },
      { name: 'Tandoori Chicken Wings',  desc: 'Smoky wings marinated in yoghurt and spice.',                            price: '₹360', veg: false, tags: ['Popular'] },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    icon: '🍛',
    items: [
      { name: 'Butter Chicken',          desc: 'Tender chicken in a velvety tomato-cream sauce.',                        price: '₹520', veg: false, tags: ['Bestseller'] },
      { name: 'Lamb Rogan Josh',         desc: 'Slow-braised Kashmiri lamb with whole spices.',                          price: '₹680', veg: false, tags: ['Chef\'s Pick'] },
      { name: 'Paneer Tikka Masala',     desc: 'Chargrilled paneer in rich smoky tomato gravy.',                         price: '₹450', veg: true  },
      { name: 'Prawn Malai Curry',       desc: 'Tiger prawns in delicate coconut-milk curry.',                           price: '₹740', veg: false },
      { name: 'Dal Makhani',             desc: 'Black lentils slow-cooked overnight with butter.',                       price: '₹320', veg: true,  tags: ['Must Try'] },
      { name: 'Hyderabadi Biryani',      desc: 'Saffron basmati rice layered with dum-cooked mutton.',                   price: '₹620', veg: false, tags: ['Signature'] },
      { name: 'Palak Paneer',            desc: 'Cottage cheese in a smooth, spiced spinach sauce.',                      price: '₹390', veg: true  },
      { name: 'Goan Fish Curry',         desc: 'Tangy coconut and tamarind curry with fresh snapper.',                   price: '₹580', veg: false },
    ],
  },
  {
    id: 'breads',
    label: 'Breads & Rice',
    icon: '🫓',
    items: [
      { name: 'Garlic Naan',             desc: 'Soft leavened flatbread with garlic and coriander butter.',              price: '₹80',  veg: true  },
      { name: 'Tandoori Roti',           desc: 'Whole-wheat bread baked in a clay tandoor.',                             price: '₹60',  veg: true  },
      { name: 'Paratha (Plain)',         desc: 'Flaky whole-wheat flatbread, toasted in pure ghee.',                     price: '₹70',  veg: true  },
      { name: 'Peshwari Naan',           desc: 'Sweet naan stuffed with coconut, almond and raisin.',                    price: '₹120', veg: true  },
      { name: 'Steamed Basmati Rice',    desc: 'Fragrant long-grain basmati — the classic accompaniment.',               price: '₹90',  veg: true  },
      { name: 'Vegetable Pulao',         desc: 'Basmati rice cooked with saffron and mixed vegetables.',                 price: '₹220', veg: true  },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    icon: '🍮',
    items: [
      { name: 'Gulab Jamun (3 pcs)',     desc: 'Warm milk-solid dumplings soaked in rose-cardamom syrup.',               price: '₹180', veg: true,  tags: ['Popular'] },
      { name: 'Mango Kulfi',             desc: 'Creamy Indian ice cream with Alphonso mango purée.',                     price: '₹200', veg: true  },
      { name: 'Rasmalai',               desc: 'Chilled cottage cheese discs in cardamom-saffron milk.',                  price: '₹220', veg: true,  tags: ['Must Try'] },
      { name: 'Chocolate Gulab Jamun',   desc: 'Our modern twist — dark chocolate stuffed inside the classic.',          price: '₹240', veg: true,  tags: ['Chef\'s Pick'] },
      { name: 'Phirni',                  desc: 'Slow-cooked rice pudding set in earthenware, topped with pistachios.',   price: '₹190', veg: true  },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: '🥤',
    items: [
      { name: 'Mango Lassi',             desc: 'Thick yoghurt blended with Alphonso mango and cardamom.',                price: '₹160', veg: true,  tags: ['Popular'] },
      { name: 'Rose Sharbat',            desc: 'Chilled rose syrup drink with basil seeds and lemon.',                   price: '₹120', veg: true  },
      { name: 'Masala Chai',             desc: 'Spiced milk tea brewed with ginger, cardamom and cinnamon.',             price: '₹80',  veg: true  },
      { name: 'Fresh Lime Soda',         desc: 'Freshly squeezed lime with soda — sweet, salty or plain.',               price: '₹90',  veg: true  },
      { name: 'Spice Garden Mocktail',   desc: 'House special: tamarind, mint, jaljeera and sparkling water.',           price: '₹180', veg: true,  tags: ['Signature'] },
      { name: 'Filter Coffee',           desc: 'South Indian drip coffee — strong, dark and aromatic.',                  price: '₹100', veg: true  },
    ],
  },
];

export default function Menu() {
  // Which tab is active — default to the first category
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);

  // Find the currently selected category object
  const activeCategory = CATEGORIES.find((c) => c.id === activeId)!;

  return (
    <section id="menu" className="menu section">
      <div className="container">

        {/* Section header */}
        <div className="text-center">
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">
            Our Full <em>Menu</em>
          </h2>
          <div className="divider divider--center" />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Explore over 50 dishes across our menu — something for every palate.
          </p>
        </div>

        {/* ── Category Tabs ── */}
        <div className="menu__tabs" role="tablist">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={cat.id === activeId}
              className={`menu__tab ${cat.id === activeId ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveId(cat.id)}
            >
              <span className="menu__tab-icon">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── Menu Items Grid ── */}
        <div className="menu__grid">
          {activeCategory.items.map((item) => (
            <div key={item.name} className="menu-item">
              <div className="menu-item__left">
                {/* Veg / non-veg indicator dot */}
                <span
                  className={`menu-item__dot ${item.veg ? 'menu-item__dot--veg' : 'menu-item__dot--nonveg'}`}
                  title={item.veg ? 'Vegetarian' : 'Non-vegetarian'}
                />
                <div>
                  <div className="menu-item__name-row">
                    <span className="menu-item__name">{item.name}</span>
                    {item.tags?.map((tag) => (
                      <span key={tag} className="menu-item__tag">{tag}</span>
                    ))}
                  </div>
                  <p className="menu-item__desc">{item.desc}</p>
                </div>
              </div>
              <span className="price menu-item__price">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="menu__legend">
          <span className="menu-item__dot menu-item__dot--veg" /> Vegetarian
          <span className="menu-item__dot menu-item__dot--nonveg" style={{ marginLeft: '1.5rem' }} /> Non-Vegetarian
        </div>

      </div>
    </section>
  );
}
