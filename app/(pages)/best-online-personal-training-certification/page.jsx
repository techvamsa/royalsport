import { redirect } from "next/navigation";

export const metadata = {
  title: "Personal Training Certification | RSF Fitness Academy",
  description:
    "Certified Personal Training course details from Royal Sports N Fitness Academy.",
};

export default function PersonalTrainingCertificationRedirect() {
  redirect("/fitness-academy/certified-personal-training-cpt");
}
