
export interface CvData {
    personalInfo: {
        name: string;
        profession: string;
        photo: string;
        phone: string;
        email: string;
        social: {
            facebook: string;
            twitter: string;
            instagram: string;
        };
    };
    languages: Array<{
        name: string;
        level: string;
    }>;
    skills: Array<{
        name: string;
        level: number;
    }>;
    aboutMe: string;
}
