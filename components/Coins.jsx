import Image from "next/image";
const Coins = ({ coins }) => {
  return (
    <>
      
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto max-w-[1440px] gap-10 ">
          {coins.map(coin => (
              <li key={coin.uuid} className="flex flex-col glassmorphism">
                <Image
                  src={coin.iconUrl}
                  alt={coin.name}
                  width={70}
                  height={70}
                  priority
                />
                <h3>{coin.name}</h3>
                <p>{coin.symbol}</p>
                <p>{coin.price}</p>
              </li>
            
          ))}
        </ul>
      
    </>
  );
};

export default Coins;
