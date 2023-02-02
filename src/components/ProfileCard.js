function ProfileCard({ title, handle, image }) {
  return (
    <div className="w-full grid p-4 shadow-md lg:max-w-lg justify-center">
      <div className="space-y-2 ">
        <h3 className="text-2xl font-semibold">Pokémon</h3>
        <p>{title}</p>
        <p className="text-gray-60 pb-5">Type: {handle}</p>
        <img src={image} height={100} width={100} alt="Pokemon"></img>
      </div>
    </div>
  );
}

export default ProfileCard;
