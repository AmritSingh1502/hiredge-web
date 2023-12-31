type DriveData = {
    _id: string;
    company_id: string;
    company_name: string;
    company_website: string;
    job_title: string;
    job_ctc: string;
}

type AuthStateType = {
    role: 'student' | 'tpo' | 'hod' | 'alumni' | null;
    access_token: string | null;
}

type DriveType = {
    branch : string[];
    companyDetails: {
        _id: string;
        company_name: string;
        company_website: string;
    };
    job_ctc: string;
    job_location: string[];
    job_title: string;
    job_description: string;
    rounds: RoundType[];
    tenth_cutoff: number;
    twelfth_cutoff: number;
    ug_cutoff: number;
}

type RoundType = {
    round_no: number;
    round_name: string;
    date: Date;
    qualified: string[]
}

type StudentDashboardType={
    prevYearOffers:{
        _id : number;
        total: number;
    }
    currYearOffers: {
        _id: number;
        total: number;
    }
    currentStatus: {
        _id: string;
        company_id: string;
        job_title: string;
        companyDetails: {
            company_name: string;
        };
    }[]
}