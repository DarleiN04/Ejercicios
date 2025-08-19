const IconText = ({ icon, title, subtitle }) => (
  <div className="flex items-center space-x-3 flex-1 max-w-xs">
    <div aria-hidden="true" className="p-2 text-amber-700 text-lg">
      <i className={icon}></i>
    </div>
    <div className="text-xs font-playfair italic">
      <p><strong>{title}</strong></p>
      <p className="text-[11px] font-normal">{subtitle}</p>
    </div>
  </div>
);

const ProductCard = ({ product }) => (
  <article className="bg-white rounded-md p-3 border border-gray-300 relative flex flex-col">
    <div className="absolute top-2 left-2 bg-gray-200 text-gray-600 text-[9px] italic rounded-full px-2 py-[2px]">
      {product.label}
    </div>
    <img src={product.img} alt={product.alt} className="mx-auto mb-3" width={200} height={200} />
    <div className="flex space-x-1 justify-center mb-1">
      {product.colors.map((color, i) => (
        <span key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
      ))}
    </div>
    <p className="text-xs text-gray-700 mb-1 text-center">{product.description}</p>
    <p className="text-xs font-semibold text-gray-900 mb-3 text-center">{product.price}</p>
    <button className="bg-green-900 text-amber-100 text-xs rounded-full px-3 py-1 w-max mx-auto flex items-center space-x-1 hover:bg-green-800">
      <i className="fas fa-plus text-[10px]"></i>
      <span>Cart</span>
    </button>
  </article>
);

const CategoryCard = ({ category, isFirst, isLast }) => (
  <article className="relative rounded-md overflow-hidden cursor-pointer group">
    <img src={category.img} alt={category.alt} className="w-full h-full object-cover" width={300} height={300} />
    {isFirst && (
      <button aria-label="Previous category" className="absolute top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 text-gray-700 hover:bg-opacity-80">
        <i className="fas fa-chevron-left text-xs"></i>
      </button>
    )}
    {isLast && (
      <button aria-label="Next category" className="absolute top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-1 text-gray-700 hover:bg-opacity-80">
        <i className="fas fa-chevron-right text-xs"></i>
      </button>
    )}
    <div className="absolute bottom-6 left-6 text-white text-center w-[120px] font-playfair text-sm">
      <p>
        Explore
        <br />
        <span className="italic">{category.title}</span>
      </p>
      <button className="mt-2 bg-amber-100 text-black text-xs rounded-full px-3 py-1 w-max flex items-center space-x-1 hover:bg-amber-200">
        <span>Shop</span>
        <i className="fas fa-arrow-right text-xs"></i>
      </button>
    </div>
  </article>
);
