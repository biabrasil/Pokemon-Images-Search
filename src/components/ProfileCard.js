function ProfileCard({ title, handle, image }) {
  return (
    <div className="w-full grid p-4 shadow-md lg:max-w-lg justify-center">
      <div className="space-y-0">
        <p className="text-gray-40 text-sm pb-0">Pokémon Name</p>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-60 pb-5 py-3">Type: {handle}</p>
        <img src={image} height={100} width={100} alt="Pokemon"></img>
      </div>
    </div>
  );
}

export default ProfileCard;
