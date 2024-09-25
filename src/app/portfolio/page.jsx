import { fitBud, bitSpend } from "../project-data";
import Carousel from "../components/carousel";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <h1 className="text-4xl font-semibold mb-5">My Projects</h1>
      <h2 className="mb-5 text-xl font-semibold">1) FitBud</h2>
      <div className="md:float-right md:ml-20 md:mb-5">
        <Carousel images={fitBud.images} />
      </div>
      <p>GitHub: <Link className="text-blue-400 hover:underline" href="https://github.com/ZhiCong17/fitbud" target="_blank" rel="noopener noreferrer">https://github.com/ZhiCong17/fitbud</Link></p>
      <p>Demo: <Link className="text-blue-400 hover:underline" href="https://www.youtube.com/watch?v=lxjk8v19DQM" target="_blank">https://www.youtube.com/watch?v=lxjk8v19DQM</Link></p>
      <p>Technology: HTML, CSS, Bootstrap, Sass, JavaScript, Ruby on Rails, PostgreSQL</p>
      <p className="mt-5"><strong>Overview:</strong> During my web development bootcamp, I pitched FitBud as my final project—a mobile fitness web application designed for individuals looking to kickstart their gym journey, especially those who feel hesitant due to a lack of knowledge. As the product owner, I was responsible for defining the overall vision and direction of FitBud. Collaborating closely with my team and under the guidance of our trainers, we built FitBud from the ground up, covering everything from product design to project management.</p>
      <p className="mt-5"><strong>Key Features:</strong> The main function of FitBud is to generate personalized workout plans. By collecting essential information from users&apos; profile—such as fitness goal, age, and weight—we leverage modern AI technology to create tailored workout plans that cater to each user&apos;s needs.</p>
      <p className="mt-5"><strong>My Contribution:</strong> I developed the Exercise Page, which serves as a comprehensive guide to the exercises included in users’ workout plans. This page features:</p>
      <ul className="list-disc list-inside">
        <li className="mt-1"><strong>Detailed Information:</strong> Recommended sets, weights, repetitions, and clear execution instructions for each exercise.</li>
        <li className="mt-1"><strong>Instructional Video:</strong> Embedded YouTube video to enhance users&apos; understanding on exercise execution.</li>
        <li className="mt-1"><strong>Set Tracker:</strong> Allows users to log their exercise sets details.</li>
        <li className="mt-1"><strong>Countdown Timer:</strong> For tracking rest intervals, promoting effective workout sessions.</li>
      </ul>
      <p className="mt-5"><strong>Impact:</strong> By prioritizing user experience and accessibility, FitBud aims to empower individuals to overcome their initial hesitations about starting their fitness journey. This project not only honed my technical skills but also taught me valuable lessons in teamwork, communication, and user-centered design.</p>

      <h2 className="mb-5 mt-14 text-xl font-semibold">2) BitSpend</h2>
      <div className="md:float-right md:ml-20 md:mb-5">
        <Carousel images={bitSpend.images} />
      </div>
      <p>GitHub: <Link className="text-blue-400 hover:underline" href="https://github.com/IvanCSQ/BitSpend" target="_blank">https://github.com/IvanCSQ/BitSpend</Link></p>
      <p>Demo: <Link className="text-blue-400 hover:underline" href="https://www.youtube.com/watch?v=_rOA-8KPBiM" target="_blank">https://www.youtube.com/watch?v=_rOA-8KPBiM</Link></p>
      <p>Technology: HTML, CSS, Sass, JavaScript, Ruby on Rails, PostgreSQL</p>
      <p className="mt-5"><strong>Overview:</strong> After completing my web development bootcamp, I collaborated with fellow coursemates to create BitSpend—a mobile web application designed to help young professionals manage their spending effectively. Recognizing the challenges many face in tracking expenses across multiple categories and payment methods, BitSpend aims to simplify this process and alleviate financial stress, enabling users to focus on their long-term financial goals.</p>
      <p className="mt-5"><strong>Key Features:</strong> BitSpend&apos;s primary function is to facilitate seamless expense tracking. Users can record their daily expenses through two intuitive methods:</p>
      <ul className="list-disc list-inside">
        <li className="mt-1"><strong>Manual Input:</strong> Users can easily log expenses by entering details directly.</li>
        <li className="mt-1"><strong>AI-Powered Receipt Scanning:</strong> Users can upload images of their receipts, and our AI technology will convert the information into data for easy recording.</li>
      </ul>
      <p className="mt-2">Once expenses are logged, users can review them based on date, categories, and tags for better insights into their spending habits.</p>
      <p className="mt-5"><strong>My Contribution:</strong> I took the lead in developing the Analysis Page, which provides users with a straightforward overview of their recorded expenses. Key components include:</p>
      <ul className="list-disc list-inside">
        <li className="mt-1"><strong>Date Picker:</strong> Users can select specific months to review their expenses.</li>
        <li className="mt-1"><strong>Visual Data Representation:</strong> A pie chart, created using Chart.js, visually breaks down monthly expenses, making it easy to identify spending patterns.</li>
        <li className="mt-1"><strong>Total Monthly Expense:</strong> Users can quickly see their total expenditures for the selected month.</li>
        <li className="mt-1"><strong>Categorized Expense List:</strong> A dropdown menu allows users to filter expenses by category, enhancing usability and understanding of spending habits.</li>
      </ul>
      <p className="mt-5 mb-14"><strong>Impact:</strong> By focusing on user-friendly design and intuitive features, BitSpend empowers young professionals to take control of their finances. This project not only strengthened my technical skills but also deepened my understanding of user experience and collaborative development practices.</p>
    </section>
  )
}
