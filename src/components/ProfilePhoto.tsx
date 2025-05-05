interface ProfilePros {
  profile_department?: string;
}

const ProfilePhoto = ({ profile_department }: ProfilePros) => {
  return (
    <img
      src={`${profile_department}`}
      alt="Descripción"
      className="w-full h-full object-cover object-center"
      style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}
    />
  );
};

export default ProfilePhoto;
