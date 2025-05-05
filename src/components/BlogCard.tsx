import BodyProps from "../types/Types";
import ProfileBody from "./ProfileBody";
import ProfilePhoto from "./ProfilePhoto";

interface BlogCardProps {
  profileData: BodyProps;
}
const BlogCard = ({ profileData }: BlogCardProps) => {
  return (
    <div className="w-[95%] md:w-1/2 lg:w-[15%] bg-white p-0 border border-transparent rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <ProfilePhoto profile_department={profileData.profile_department} />
      <ProfileBody
        department={profileData.department}
        hard_skill={profileData.hard_skill}
        last_update={profileData.last_update}
        name={profileData.name}
        resume={profileData.resume}
        
      />
    </div>
  );
};

export default BlogCard;
