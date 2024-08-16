import MentorCard from "./MentorCard";

function Mentors() {
    const mentorData = {
        image: 'https://example.com/mentor.jpg',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        qualification: 'PhD in Computer Science',
        profileSummary: 'John has over 20 years of experience in software development and has mentored numerous students and professionals in the field of computer science. He specializes in AI and machine learning.',
      };
  return (
    <div className="h-fit w-screen flex justify-center gap-4 p-2">
      <MentorCard mentor={mentorData}/>
    </div>
  );
}

export default Mentors;
