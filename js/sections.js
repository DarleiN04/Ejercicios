function HeaderBanner() {
  return (
<section className="relative bg-black bg-opacity-70 text-white rounded-md overflow-hidden min-h-[500px]">
  <img
    src="https://wallpapers.com/images/featured/fondos-de-paisajes-naturales-k9tfch0hpfjbaxel.jpg"
    alt="Descripción de la imagen"
    className="absolute inset-0 w-full h-full object-cover opacity-40 z-0"
  />
  <div className="relative z-10">
    <nav className="flex justify-between items-center px-6 py-4 md:py-6 md:px-10 w-full border-b border-white border-opacity-20">
      <ul className="flex space-x-6 text-xs font-semibold">
        {["Shop", "Bestsellers", "Gallery", "About"].map((item) => (
          <li key={item}>
            <a href="#" className="hover:underline">{item}</a>
          </li>
        ))}
      </ul>
      <h1
        className="text-lg font-bold text-amber-300 mx-auto absolute left-1/2 transform -translate-x-1/2"
        style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
        HomeDine</h1>
      <div className="flex items-center space-x-4 text-white text-sm">
        <div className="relative bg-white bg-opacity-20 rounded-full flex items-center px-3 py-1 w-[180px] md:w-[220px]">
          <i className="fas fa-search absolute left-3 text-white text-xs"></i>
          <input
            type="search"
            placeholder="Search Product..."
            className="bg-transparent placeholder-white text-white text-xs pl-8 w-full focus:outline-none"
          />
        </div>
        <button aria-label="Shopping cart" className="p-2 rounded-full hover:bg-white hover:bg-opacity-20">
          <i className="fas fa-shopping-bag text-white text-sm"></i>
        </button>
        <button aria-label="User account" className="p-2 rounded-full hover:bg-white hover:bg-opacity-20">
          <i className="fas fa-user text-white text-sm"></i>
        </button>
      </div>
    </nav>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <div className="flex flex-col px-6 py-8 md:py-0 md:px-12 max-w-md lg:max-w-xl">
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight max-w-[320px] text-white">
        Eco-Friendly <span className="italic font-playfair text-amber-100">Kitchenware</span> for a greener home
      </h1>
      <h6 className="text-white">
        The eco-friendly kitchenware niche with a sense of<br />
        urgency. Much like the original banner. Let me know if<br />
        you'd like adjustments.
      </h6>
      <button className="mt-6 bg-amber-100 text-black text-xs font-semibold rounded-full px-4 py-1 w-max flex items-center space-x-1 hover:bg-amber-200">
        <span>Shop now</span>
        <i className="fas fa-arrow-right text-xs"></i>
      </button>
    </div>

    <div className="absolute bottom-8 right-8 bg-green-900 bg-opacity-70 rounded-md p-4 max-w-[120px] text-amber-100 text-xs font-playfair">
      <p>
        Natural.<br />
        Sustainable.<br />
        Eco-conscious.
      </p><br></br>
      <div className="flex items-center justify-center mt-2 space-x-1">
        <span className="text-2xl font-semibold">96%</span>
        <i className="fas fa-seedling text-amber-100 text-lg"></i>
      </div>
    </div>
  </div>
</section>

  );
}

function ProductsSection() {
  return (
    <section className="px-6 py-6">
      <div className="flex justify-between items-center mb-3 text-gray-700 text-sm font-normal">
        <div>
          Eco Essentials Planet-Friendly<br />
          <span className="font-semibold italic">Bestselling ✧ <strong>Products</strong></span>
        </div>
        <a href="#" className="text-xs font-semibold hover:underline flex items-center space-x-1">
          <span>More products</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </section>
  );
}

function KitchenImageSection() {
  return (
    <section className="relative px-6 mb-6">
      <img
        src="https://storage.googleapis.com/a1aa/image/b42a1e46-8be4-4029-a562-e1f57b7984a7.jpg"
        alt="Modern green kitchen with black and white floor tiles and bar stools"
        className="w-full rounded-md object-cover"
        width={1200}
        height={320}
        style={{ height: 320 }}
      />
      <div className="absolute bottom-6 left-6 text-white text-xs max-w-[320px] font-playfair">
        We craft <span className="italic">kitchenware</span> you can trust for years to come — through everyday meals and <span className="italic">evolving lifestyles</span>. Each piece is thoughtfully made with <span className="italic">sustainable materials</span>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-4 px-6 py-6 mb-6">
      <IconText icon="fas fa-seedling" title="Natural" subtitle="Finish" />
      <IconText icon="fas fa-sync-alt" title="Eco" subtitle="Innovation" />
      <IconText icon="fas fa-leaf" title="Sustainable" subtitle="Materials" />
    </section>
  );
}

function CategoriesSection() {
  return (
    <section className="px-6 mb-6">
      <p className="text-gray-600 text-sm mb-3">
        Explore our thoughtful and<br />
        planet-first ✧ <span className="italic font-playfair">Categories</span>
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, i) => (
          <CategoryCard key={cat.id} category={cat} isFirst={i === 0} isLast={i === categories.length - 1} />
        ))}
      </div>
    </section>
  );
}
