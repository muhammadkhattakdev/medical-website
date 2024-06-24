import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/context";
import { useNavigate } from "react-router-dom";


const get_user_profile_url = process.env.REACT_APP_GET_USER_PROFILE_URL;
const save_profile_info_url = process.env.REACT_APP_SAVE_PROFILE_INFO_URL;

export default function ProfileForm() {

    const context = useContext(Context);
    const [userProfile, setUserProfile] = useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country,setCountry] = useState('');
    const [status, setStatus] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [registrationBody, setRegistrationBody] = useState('');

    const navigate = useNavigate();

    const getUseProfile = async e => {
        const response = await fetch(get_user_profile_url, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${context.tokens.access}`
            }
        })

        const data = await response.json();

        if (response.status === 200 ) {
            setRegistrationBody(data.profile.registration_body)
            setSpeciality(data.profile.speciality)
            setStatus(data.profile.status)
            setLastName(data.profile.last_name)
            setFirstName(data.profile.first_name)
            setEmail(data.profile.email)
            setPhoneNumber(data.profile.phone_number)
            setCountry(data.profile.country)
        }

        
        if(response.status === 401) {
            navigate('/login/');
            localStorage.removeItem('tokens')
            localStorage.removeItem('user')
        }
    }


    const saveDetails = async e => {
        e.preventDefault();
        const response = await fetch(save_profile_info_url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization: `Bearer ${context.tokens.access}`
            },
            body: JSON.stringify({registration_body:registrationBody, status:status,speciality:speciality, first_name:firstName,last_name:lastName,email:email, phone_number:phoneNumber, country:country})
        });

        const data = await response.json();

        if(response.status === 200) {
            alert('Your User Info has been updated successfully');            
            console.log(data);
        }

        if(response.status === 401) {
            navigate('/login/');
            localStorage.removeItem('tokens')
            localStorage.removeItem('user')
        }
    }


    useEffect(() => {
        getUseProfile();
    }, [])
    return (
        <>
            <form onSubmit={saveDetails} className="w-100 mt-3 justify-content-start gap-5  d-flex flex-row flex-wrap">
                <div className="input w-25 mt-2 mx-3">
                    <input  onChange={e => setFirstName(e.target.value)}  value={firstName} type="text" className="form-control w-100" />
                    <label htmlFor="">First Name</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <input  onChange={e => setLastName(e.target.value)}  value={lastName} type="text" className="form-control w-100" />
                    <label htmlFor="">Last Name</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <input  onChange={e => setEmail(e.target.value)}  value={email} type="text" className="form-control w-100" />
                    <label htmlFor="">Email Address</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <input  onChange={e => setPhoneNumber(e.target.value)}  value={phoneNumber} type="text" className="form-control w-100" />
                    <label htmlFor="">Phone Number</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <input  onChange={e => setCountry(e.target.value)}  value={country} type="text" className="form-control w-100" />
                    <label htmlFor="">Country</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <select  onChange={e => setStatus(e.target.value)}  value={status} className="form-control w-100" >
                    <option value="Advanced Clinical Practitioner">
                                  Advanced Clinical Practitioner
                                </option>
                                <option value="Charge Nurse">
                                  Charge Nurse
                                </option>
                                <option value="Clinical Nurse Educator">
                                  Clinical Nurse Educator
                                </option>
                                <option value="Community nurse">
                                  Community nurse
                                </option>
                                <option value="Critical care nurse">
                                  Critical care nurse
                                </option>
                                <option value="Dental nurse">
                                  Dental nurse
                                </option>
                                <option value="Deputy Director of Nursing">
                                  Deputy Director of Nursing
                                </option>
                                <option value="Digital Nurse">
                                  Digital Nurse
                                </option>
                                <option value="Director of Nursing">
                                  Director of Nursing
                                </option>
                                <option value="Emergency Nurse Practitioner">
                                  Emergency Nurse Practitioner
                                </option>
                                <option value="Forensic Nurse">
                                  Forensic Nurse
                                </option>
                                <option value="Geriatric nurse">
                                  Geriatric nurse
                                </option>
                                <option value="Head of Nursing">
                                  Head of Nursing
                                </option>
                                <option value="Matron">Matron</option>
                                <option value="Mental Health Nurse">
                                  Mental Health Nurse
                                </option>
                                <option value="Neonatal nurse">
                                  Neonatal nurse
                                </option>
                                <option value="Nurse anaesthetist">
                                  Nurse anaesthetist
                                </option>
                                <option value="Nurse Midwife">
                                  Nurse Midwife
                                </option>
                                <option value="Nurse Practitioner">
                                  Nurse Practitioner
                                </option>
                                <option value="Nursery nurse">
                                  Nursery nurse
                                </option>
                                <option value="Nursing Supervisor">
                                  Nursing Supervisor
                                </option>
                                <option value="Office nurse">
                                  Office nurse
                                </option>
                                <option value="Paediatric nurse">
                                  Paediatric nurse
                                </option>
                                <option value="Pain management Nurse">
                                  Pain management Nurse
                                </option>
                                <option value="Prison nurse">
                                  Prison nurse
                                </option>
                                <option value="Psychiatric nurse">
                                  Psychiatric nurse
                                </option>
                                <option value="Registered Nurse">
                                  Registered Nurse
                                </option>
                                <option value="Research Nurse">
                                  Research Nurse
                                </option>
                                <option value="School Nurse">
                                  School Nurse
                                </option>
                                <option value="Senior Matron">
                                  Senior Matron
                                </option>
                                <option value="Student Nurse">
                                  Student Nurse
                                </option>
                                <option value="Theatre nurse">
                                  Theatre nurse
                                </option>
                                <option value="Tissue Viability Nurse">
                                  Tissue Viability Nurse
                                </option>
                                <option value="Veterinary nurse">
                                  Veterinary nurse
                                </option>
                    </select>
                    <label htmlFor="">Status</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <select onChange={e => setSpeciality(e.targe9t.value)} value={speciality} type="text" className="form-control w-100" >
                    <option value="AAA Screening">
                                  AAA Screening
                                </option>
                                <option value="Accident and Emergency">
                                  Accident and Emergency
                                </option>
                                <option value="Acquired/ Traumatic brain injury">
                                  Acquired/ Traumatic brain injury
                                </option>
                                <option value="Acute Medicine and CAU">
                                  Acute Medicine and CAU
                                </option>
                                <option value="Alcohol Liaison">
                                  Alcohol Liaison
                                </option>
                                <option value="Anaesthetics">
                                  Anaesthetics
                                </option>
                                <option value="Anticoagulation Clinic">
                                  Anticoagulation Clinic
                                </option>
                                <option value="Appliances">Appliances</option>
                                <option value="Armed Forces and Veterans">
                                  Armed Forces and Veterans
                                </option>
                                <option value="Ashford Walk-in Centre">
                                  Ashford Walk-in Centre
                                </option>
                                <option value="Audiology">Audiology</option>
                                <option value="Balloon Kyphoplasty">
                                  Balloon Kyphoplasty
                                </option>
                                <option value="Bariatric Support Group">
                                  Bariatric Support Group
                                </option>
                                <option value="Bariatric Surgery">
                                  Bariatric Surgery
                                </option>
                                <option value="Bereavement Office (Patient Affairs)">
                                  Bereavement Office (Patient Affairs)
                                </option>
                                <option value="Biochemistry">
                                  Biochemistry
                                </option>
                                <option value="Blood Tests (Phlebotomy)">
                                  Blood Tests (Phlebotomy)
                                </option>
                                <option value="Blood Transfusion Services">
                                  Blood Transfusion Services
                                </option>
                                <option value="Bone Density Unit">
                                  Bone Density Unit
                                </option>
                                <option value="Bradley Neurorehabilitation Unit">
                                  Bradley Neurorehabilitation Unit
                                </option>
                                <option value="">Speciality</option>
                                <option value="Breast Surgery">
                                  Breast Surgery
                                </option>
                                <option value="Caldicott and Data Protection">
                                  Caldicott and Data Protection
                                </option>
                                <option value="CAMHS">CAMHS</option>
                                <option value="Cancer Services">
                                  Cancer Services
                                </option>
                                <option value="Capital Projects">
                                  Capital Projects
                                </option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="CEMIG (endometriosis)">
                                  CEMIG (endometriosis)
                                </option>
                                <option value="Chapel of Rest">
                                  Chapel of Rest
                                </option>
                                <option value="Chaplaincy">Chaplaincy</option>
                                <option value="Chemotherapy">
                                  Chemotherapy
                                </option>
                                <option value="Child and Adolescent Mental Health Service">
                                  Child and Adolescent Mental Health Service
                                </option>
                                <option value="Childcare">Childcare</option>
                                <option value="Children’s Services">
                                  Children’s Services
                                </option>
                                <option value="Chiropody">Chiropody</option>
                                <option value="Chronic Pain Management">
                                  Chronic Pain Management
                                </option>
                                <option value="Cleaning / Housekeeping">
                                  Cleaning / Housekeeping
                                </option>
                                <option value="Clinical Assessment Unit (CAU)">
                                  Clinical Assessment Unit (CAU)
                                </option>
                                <option value="Clinical Audit and Effectiveness">
                                  Clinical Audit and Effectiveness
                                </option>
                                <option value="Clinical Neurophysiology">
                                  Clinical Neurophysiology
                                </option>
                                <option value="Clinical Oncology">
                                  Clinical Oncology
                                </option>
                                <option value="Cognitive Rehabilitation">
                                  Cognitive Rehabilitation
                                </option>
                                <option value="Colorectal Surgery">
                                  Colorectal Surgery
                                </option>
                                <option value="Communications">
                                  Communications
                                </option>
                                <option value="CT Scanning">CT Scanning</option>
                                <option value="Cytopathology">
                                  Cytopathology
                                </option>
                                <option value="">Service</option>
                                <option value="Day Nursery">Day Nursery</option>
                                <option value="Day Surgery">Day Surgery</option>
                                <option value="Dementia Services">
                                  Dementia Services
                                </option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="Dietetics">Dietetics</option>
                                <option value="Domestic Services">
                                  Domestic Services
                                </option>
                                <option value="Ear, Nose, and Throat (ENT)">
                                  Ear, Nose, and Throat (ENT)
                                </option>
                                <option value="Early Pregnancy Unit">
                                  Early Pregnancy Unit
                                </option>
                                <option value="Education Centres">
                                  Education Centres
                                </option>
                                <option value="End of Life Care">
                                  End of Life Care
                                </option>
                                <option value="Endocrinology">
                                  Endocrinology
                                </option>
                                <option value="Endometriosis (CEMIG)">
                                  Endometriosis (CEMIG)
                                </option>
                                <option value="Endoscopy">Endoscopy</option>
                                <option value="Fracture Clinic">
                                  Fracture Clinic
                                </option>
                                <option value="Gastroenterology">
                                  Gastroenterology
                                </option>
                                <option value="General Surgery">
                                  General Surgery
                                </option>
                                <option value="Gynaecology">Gynaecology</option>
                                <option value="Haematology">Haematology</option>
                                <option value="Haematuria clinic">
                                  Haematuria clinic
                                </option>
                                <option value="Health Informatics">
                                  Health Informatics
                                </option>
                                <option value="Health Records">
                                  Health Records
                                </option>
                                <option value="Hepatobiliary and Pancreatic Surgery">
                                  Hepatobiliary and Pancreatic Surgery
                                </option>
                                <option value="Hepatology">Hepatology</option>
                                <option value="Histopathology">
                                  Histopathology
                                </option>
                                <option value="Housekeeping">
                                  Housekeeping
                                </option>
                                <option value="Human Resources">
                                  Human Resources
                                </option>
                                <option value="Imaging">Imaging</option>
                                <option value="Infant Feeding">
                                  Infant Feeding
                                </option>
                                <option value="Infection Control">
                                  Infection Control
                                </option>
                                <option value="Information and IT">
                                  Information and IT
                                </option>
                                <option value="Inpatient Pain Service">
                                  Inpatient Pain Service
                                </option>
                                <option value="Intensive Care">
                                  Intensive Care
                                </option>
                                <option value="Intermediate Care Team and Adult Social Care">
                                  Intermediate Care Team and Adult Social Care
                                </option>
                                <option value="Interventional Suite">
                                  Interventional Suite
                                </option>
                                <option value="Learning Disabilities">
                                  Learning Disabilities
                                </option>
                                <option value="Liaison Psychiatry">
                                  Liaison Psychiatry
                                </option>
                                <option value="Library and Knowledge Services">
                                  Library and Knowledge Services
                                </option>
                                <option value="Mammography and Breast Ultrasound">
                                  Mammography and Breast Ultrasound
                                </option>
                                <option value="Maternity and Midwifery">
                                  Maternity and Midwifery
                                </option>
                                <option value="Maxillo-facial Surgery">
                                  Maxillo-facial Surgery
                                </option>
                                <option value="Medical Examiners Office">
                                  Medical Examiners Office
                                </option>
                                <option value="Medical Laboratory">
                                  Medical Laboratory
                                </option>
                                <option value="Medical Oncology">
                                  Medical Oncology
                                </option>
                                <option value="Medical Services">
                                  Medical Services
                                </option>
                                <option value="Mental Health Services">
                                  Mental Health Services
                                </option>
                                <option value="Microbiology">
                                  Microbiology
                                </option>
                                <option value="Mortuary">Mortuary</option>
                                <option value="Moving and Handling">
                                  Moving and Handling
                                </option>
                                <option value="MRI">MRI</option>
                                <option value="MRSA Screening">
                                  MRSA Screening
                                </option>
                                <option value="Neonatal Intensive Care Unit (NICU)">
                                  Neonatal Intensive Care Unit (NICU)
                                </option>
                                <option value="Nephrology">Nephrology</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Neurophysiology">
                                  Neurophysiology
                                </option>
                                <option value="Neurorehabilitation">
                                  Neurorehabilitation
                                </option>
                                <option value="Obstetrics">Obstetrics</option>
                                <option value="Occupational Therapy">
                                  Occupational Therapy
                                </option>
                                <option value="Oncology">Oncology</option>
                                <option value="Ophthalmology">
                                  Ophthalmology
                                </option>
                                <option value="Oral Surgery">
                                  Oral Surgery
                                </option>
                                <option value="Orthodontics">
                                  Orthodontics
                                </option>
                                <option value="Orthopaedics">
                                  Orthopaedics
                                </option>
                                <option value="Outpatients">Outpatients</option>
                                <option value="Paediatric Diabetes">
                                  Paediatric Diabetes
                                </option>
                                <option value="Paediatric Dietetics">
                                  Paediatric Dietetics
                                </option>
                                <option value="Paediatrics">Paediatrics</option>
                                <option value="Pain Management">
                                  Pain Management
                                </option>
                                <option value="Palliative Care">
                                  Palliative Care
                                </option>
                                <option value="Pastoral Services">
                                  Pastoral Services
                                </option>
                                <option value="Pathology">Pathology</option>
                                <option value="Patient Advice and Liaison Service (PALS)">
                                  Patient Advice and Liaison Service (PALS)
                                </option>
                                <option value="Patient Experience">
                                  Patient Experience
                                </option>
                                <option value="Patient Information">
                                  Patient Information
                                </option>
                                <option value="Patient Panel">
                                  Patient Panel
                                </option>
                                <option value="Pelvic Health Physiotherapy">
                                  Pelvic Health Physiotherapy
                                </option>
                                <option value="Pharmacy">Pharmacy</option>
                                <option value="Physiotherapy">
                                  Physiotherapy
                                </option>
                                <option value="">Service</option>
                                <option value="Plastic Surgery">
                                  Plastic Surgery
                                </option>
                                <option value="Podiatry">Podiatry</option>
                                <option value="Quality">Quality</option>
                                <option value="Radical cystectomy with full compliment of bladder reconstruction">
                                  Radical cystectomy with full compliment of
                                  bladder reconstruction
                                </option>
                                <option value="Radical prostatectomy">
                                  Radical prostatectomy
                                </option>
                                <option value="Radiology">Radiology</option>
                                <option value="Radiotherapy">
                                  Radiotherapy
                                </option>
                                <option value="Rapid Access Centre - Elderly">
                                  Rapid Access Centre - Elderly
                                </option>
                                <option value="Rapid Access Centre - Paediatrics">
                                  Rapid Access Centre - Paediatrics
                                </option>
                                <option value="Recruitment and Retention">
                                  Recruitment and Retention
                                </option>
                                <option value="Rehabilitation following Major Trauma">
                                  Rehabilitation following Major Trauma
                                </option>
                                <option value="Rehabilitation Medicine">
                                  Rehabilitation Medicine
                                </option>
                                <option value="Renal Services">
                                  Renal Services
                                </option>
                                <option value="Research and Development">
                                  Research and Development
                                </option>
                                <option value="Respiratory Medicine">
                                  Respiratory Medicine
                                </option>
                                <option value="Restorative Dentistry">
                                  Restorative Dentistry
                                </option>
                                <option value="Rheumatology">
                                  Rheumatology
                                </option>
                                <option value="Safeguarding Adults">
                                  Safeguarding Adults
                                </option>
                                <option value="Safeguarding Children">
                                  Safeguarding Children
                                </option>
                                <option value="Security Services">
                                  Security Services
                                </option>
                                <option value="Senior Adult Medical Service">
                                  Senior Adult Medical Service
                                </option>
                                <option value="Sexual clinic">
                                  Sexual clinic
                                </option>
                                <option value="Speech and Language Therapy">
                                  Speech and Language Therapy
                                </option>
                                <option value="Staff Accommodation">
                                  Staff Accommodation
                                </option>
                                <option value="Stephanie Marks Diabetes Centre">
                                  Stephanie Marks Diabetes Centre
                                </option>
                                <option value="">Service</option>
                                <option value="Sterile Services">
                                  Sterile Services
                                </option>
                                <option value="Stoma Care">Stoma Care</option>
                                <option value="Stroke Services">
                                  Stroke Services
                                </option>
                                <option value="Student Nurses">
                                  Student Nurses
                                </option>
                                <option value="Supplies and Procurement">
                                  Supplies and Procurement
                                </option>
                                <option value="Surgical Services">
                                  Surgical Services
                                </option>
                                <option value="Switchboard and Telecommunications">
                                  Switchboard and Telecommunications
                                </option>
                                <option value="SWMS (Specialist Weight Management Service)">
                                  SWMS (Specialist Weight Management Service)
                                </option>
                                <option value="Theatres">Theatres</option>
                                <option value="Training and Development">
                                  Training and Development
                                </option>
                                <option value="Trauma and Orthopaedics">
                                  Trauma and Orthopaedics
                                </option>
                                <option value="Trust Board">Trust Board</option>
                                <option value="Tuberculosis Nursing Service">
                                  Tuberculosis Nursing Service
                                </option>
                                <option value="Ultrasound">Ultrasound</option>
                                <option value="Upper Gastrointestinal Surgery">
                                  Upper Gastrointestinal Surgery
                                </option>
                                <option value="Urodynamics and urogynaecology">
                                  Urodynamics and urogynaecology
                                </option>
                                <option value="Urological oncology">
                                  Urological oncology
                                </option>
                                <option value="Urology">Urology</option>
                                <option value="Vascular Surgery">
                                  Vascular Surgery{" "}
                                </option>
                                <option value="Vocational Rehabilitation">
                                  Vocational Rehabilitation{" "}
                                </option>
                                <option value="Voluntary Services ">
                                  Voluntary Services{" "}
                                </option>
                                <option value="Walk-in Centre">
                                  Walk-in Centre
                                </option>
                                <option value="Weight Management Service ">
                                  Weight Management Service{" "}
                                </option>
                                <option value="Work Experience">
                                  Work Experience
                                </option>
                                <option value="X-Ray   Our radiology team provide a range of diagnostics services including x-rays, CT and MRI scans.">
                                  X-Ray Our radiology team provide a range of
                                  diagnostics services including x-rays, CT and
                                  MRI scans.{" "}
                                </option>

                    </select>
                    <label htmlFor="">Speciality</label>
                </div>
                <div className="input w-25 mt-2 mx-3">
                    <select  onChange={e => setRegistrationBody(e.target.value)}  value={registrationBody} type="text" className="form-control w-100">
                                <option value="American Nurses Credentialing Center (ANCC)">
                                  American Nurses Credentialing Center (ANCC)
                                </option>
                                <option value="Bangladesh Nursing and Midwifery Council (BNMC)">
                                  Bangladesh Nursing and Midwifery Council
                                  (BNMC)
                                </option>
                                <option value="British Columbia College of Nurses and Midwives (BCCNM)">
                                  British Columbia College of Nurses and
                                  Midwives (BCCNM)
                                </option>
                                <option value="Canadian Association of Schools of Nursing (CASN)">
                                  Canadian Association of Schools of Nursing
                                  (CASN)
                                </option>
                                <option value="College of Nurses of Ontario (CNO)">
                                  College of Nurses of Ontario (CNO)
                                </option>
                                <option value="Consejo General de Enfermería (CGE) (Spain)">
                                  Consejo General de Enfermería (CGE) (Spain)
                                </option>
                                <option value="Dubai Health Authority">
                                  Dubai Health Authority
                                </option>
                                <option value="Federazione Nazionale Ordini Professioni Infermieristiche (Italy)">
                                  Federazione Nazionale Ordini Professioni
                                  Infermieristiche (Italy)
                                </option>
                                <option value="Indian Nursing Council">
                                  Indian Nursing Council
                                </option>
                                <option value="Ministry of Health and Prevention UAE (MOHAP)">
                                  Ministry of Health and Prevention UAE (MOHAP)
                                </option>
                                <option value="National Certification Corporation (NCC)">
                                  National Certification Corporation (NCC)
                                </option>
                                <option value="National Council of State Boards of Nursing (NCSBN) (United States)">
                                  National Council of State Boards of Nursing
                                  (NCSBN) (United States)
                                </option>
                                <option value="National League for Nursing Accrediting Commission (NLNAC)">
                                  National League for Nursing Accrediting
                                  Commission (NLNAC)
                                </option>
                                <option value="Nepal Nursing Council">
                                  Nepal Nursing Council
                                </option>
                                <option value="Nurses And Midwives Council, Guyana">
                                  Nurses And Midwives Council, Guyana
                                </option>
                                <option value="Nurses Council of Zimbabwe">
                                  Nurses Council of Zimbabwe
                                </option>
                                <option value="Nursing and Midwifery Board of Australia (NMBA)">
                                  Nursing and Midwifery Board of Australia
                                  (NMBA)
                                </option>
                                <option value="Nursing and Midwifery Board of Ireland (NMBI)">
                                  Nursing and Midwifery Board of Ireland (NMBI)
                                </option>
                                <option value="Nursing and Midwifery Council of Ghana">
                                  Nursing and Midwifery Council of Ghana
                                </option>
                                <option value="Nursing and Midwifery Council of Nigeria">
                                  Nursing and Midwifery Council of Nigeria
                                </option>
                                <option value="Nursing and Midwifery Council UK (NMC)">
                                  Nursing and Midwifery Council UK (NMC)
                                </option>
                                <option value="Nursing Council of Jamaica">
                                  Nursing Council of Jamaica
                                </option>
                                <option value="Nursing Council Of Kenya">
                                  Nursing Council Of Kenya
                                </option>
                                <option value="Nursing Council of New Zealand (NCNZ)">
                                  Nursing Council of New Zealand (NCNZ)
                                </option>
                                <option value="Pakistan Nursing & Midwifery Council (PNMC)">
                                  Pakistan Nursing & Midwifery Council (PNMC)
                                </option>
                                <option value="Professional Regulation Commission (PRC) - Philippines">
                                  Professional Regulation Commission (PRC) -
                                  Philippines
                                </option>
                                <option value="Qatar Department of Healthcare Professions (DHP)">
                                  Qatar Department of Healthcare Professions
                                  (DHP)
                                </option>
                                <option value="Saudi Commission for Health Specialties (SCFHS)">
                                  Saudi Commission for Health Specialties
                                  (SCFHS)
                                </option>
                                <option value="Singapore Nursing Board (SNB)">
                                  Singapore Nursing Board (SNB)
                                </option>
                                <option value="South African Nursing Council">
                                  South African Nursing Council
                                </option>
                                <option value="The Nursing Council of Hong Kong (NCHK)">
                                  The Nursing Council of Hong Kong (NCHK)
                                </option>
                                <option value="The Nursing Council of Trinidad and Tobago">
                                  The Nursing Council of Trinidad and Tobago
                                </option>
                                <option value="The ordem dos enfermeiros (Portugal)">
                                  The ordem dos enfermeiros (Portugal)
                                </option>
                                <option value="The Order of General Medical Assistants, Midwives and Medical Assistants from Romania (OAMGMAMR)">
                                  The Order of General Medical Assistants,
                                  Midwives and Medical Assistants from Romania
                                  (OAMGMAMR)
                                </option>
                                <option value="Tunisian Ministry of Health (Tunisia)">
                                  Tunisian Ministry of Health (Tunisia)
                                </option>
                    </select>
                    <label htmlFor="">Registration Body</label>
                </div>
                <div className="input w-100 mx-2">
                    <button type="submit" className="my-primary-btn">Save Profile</button>
                </div>
            </form>
        </>
    )
}