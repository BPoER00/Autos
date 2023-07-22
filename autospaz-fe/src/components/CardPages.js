function CardPages({ children }) {
  return (
    <main class="min-w-screen min-h-screen bg-slate-100 flex items-center p-5 lg:p-10 overflow-hidden relative">
      <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
        <div class="md:flex items-center -mx-10">
          {children}
        </div>
      </div>
    </main>
  );
}

export default CardPages;
