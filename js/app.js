function App() {
  return (
    <main className="max-w-[1200px] w-full bg-white rounded-md overflow-hidden relative">
      <HeaderBanner />
      <ProductsSection />
      <KitchenImageSection />
      <FeaturesSection />
      <CategoriesSection />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
