import {
  faAdd,
  faArrowDown,
  faArrowUp,
  faCheck,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import BLSImage from "../../static/images/BLS.jpg";
import frailtyScoreImg from "../../static/images/frailty_score_img.png";
import { Link } from "react-router-dom";
import partialAirwayObsImage from "../../static/images/partial_airway_obstruction.png";
import completeAirwayObsImage from "../../static/images/complete_airway_obstruction.png";
import Form1Output from "./form1Output";
import { useRef } from "react";
// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const dateFromOnset = {
  year: null,
  month: null,
  weeks: null,
  days: null,
};


export default function Form1() {
  const [optionsModalShowing, setOptionsModalShowing] = useState(false);
  const [a4FormShowing, seta4FormShowing] = useState(false);
  const [b4FormShowing, setb4FormShowing] = useState(false);
  const [c4FormShowing, setc4FormShowing] = useState(false);
  const [d4FormShowing, setd4FormShowing] = useState(false);
  const [a6FormShowing, seta6FormShowing] = useState(false);
  const [distFeatures, setDistFeatures] = useState("");
  const [Clothing, setClothing] = useState("");
  const [nursingImpressions, setNursingImpressions] = useState([]);
  const [PostureGait, setPostureGait] = useState("");
  const [Name, setName] = useState("");
  const [Area, setArea] = useState("");
  const [DateofCompletingNote, setDateofCompletingNote] = useState("");
  const [Grooming, setGrooming] = useState("");
  const [obviousSelfHarm, setObviousSelfHarm] = useState("");
  const [a8FormShowing, seta8FormShowing] = useState(false);
  const [b8FormShowing, setb8FormShowing] = useState(false);
  const [a10FormShowing, seta10FormShowing] = useState(false);
  const [b10FormShowing, setb10FormShowing] = useState(false);
  const [form17Showing, setForm17Showing] = useState(false);
  const [addPainsFormShowing, setAddPainsFormShowing] = useState(false);
  const [addLinesFormShowing, setAddLinesFormShowing] = useState(false);
  const [addSoresFormShowing, setAddSoresFormShowing] = useState(false);
  const [addMentalMedicationFormShowing, setAddMentalMedicationFormShowing] =
    useState(false);
  const [
    addPriorToComingMedicationsFormShowing,
    setAddPriorToComingMedicationsFormShowing,
  ] = useState(false);
  const [datixNumberFormShowing, setDatixNumberFormShowing] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const [mentalHealthConcern, setMentalHealthConcern] = useState(false);
  const [datixNumber, setDatixNumber] = useState("");
  const [bloodGlucose, setBloodGlucose] = useState("");
  const [pressureSoreWasReported, setPressureSoreWasReported] = useState(null);
  const [rightPupilSize, setRightPupilSize] = useState("");
  const [leftPupilSize, setLeftPupilSize] = useState("");
  const [UrineBlood, setUrineBlood] = useState("");
  const [eyeContact, setEyeContact] = useState("");
  const [FacialExpression, setFacialExpression] = useState("");
  const [PsychomotorActivity, setPsychomotorActivity] = useState("");
  const [BodyLanguage, setBodyLanguage] = useState("");
  const [LevelOfArousal, setLevelOfArousal] = useState("");
  const [AbilityToFollowRequest, setAbilityToFollowRequest] = useState("");
  const [Rapport, setRapport] = useState("");
  const [Rate, setRate] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [Tone, setTone] = useState("");
  const [Volume, setVolume] = useState("");
  const [FluencyAndRhythm, setFluencyAndRhythm] = useState("");
  const [MoodState, setMoodState] = useState("");
  const [SuicidalThoughts, setSuicidalThoughts] = useState("");
  const [SuicidalPlanInPlace, setSuicidalPlanInPlace] = useState("");
  const [SuicidalPlanDesc, setSuicidalPlanDesc] = useState("");
  const [PreviousSuidicalAttempt, setPreviousSuidicalAttempt] = useState("");
  const [HarmOthers, setHarmOthers] = useState("");
  const [HomicidalThoughts, setHomicidalThoughts] = useState("");
  const [Halucination, setHalucination] = useState("");
  const [HalucinationDesc, setHalucinationDesc] = useState("");
  const [Orientation, setOrientation] = useState("");
  const [AskingForHelp, setAskingForHelp] = useState("");
  const [OtherMentalHealthDetails, setOtherMentalHealthDetails] = useState("");
  const [UrineGlucose, setUrineGlucose] = useState("");
  const [UrineProtien, setUrineProtien] = useState("");
  const [InjuryLocation, setInjuryLocation] = useState("");
  const [AnyReducedMovement, setAnyReducedMovement] = useState("");
  const [AnyDecreasedSensation, setAnyDecreasedSensation] = useState("");
  const [DecreasedSensationDesc, setDecreasedSensationDesc] = useState("");
  const [Paresthesia, setParesthesia] = useState("");
  const [BearWeightOnLimb, setBearWeightOnLimb] = useState("");
  const [PedalPulse, setPedalPulse] = useState("");
  const [AbleToMoveToes, setAbleToMoveToes] = useState("");
  const [UrinePh, setUrinePh] = useState("");
  const [UrineKetone, setUrineKetone] = useState("");
  const [PainCon, setPainCon] = useState("");
  const [PainType, setPainType] = useState("");
  const [PainSpread, setPainSpread] = useState("");
  const [PainSevereness, setPainSevereness] = useState("");
  const [PainTime, setPainTime] = useState("");
  const [UrineSpecific, setUrineSpecific] = useState("");
  const [UrineNitrite, setUrineNitrite] = useState("");
  const [UrineLuekocytes, setUrineLuekocytes] = useState("");
  const [locationOfWound, setLocationOfWound] = useState("");
  const [typeOfWound, setTypeOfWound] = useState("");
  const [ageOfWound, setAgeOfWound] = useState("");
  const [otherTakenActionsOfWound, setOtherTakenActionsOfWound] = useState("");
  const [Ph, setPh] = useState("");
  const [paco, setpaco] = useState("");
  const [pao, setpao] = useState("");
  const [hco, sethco] = useState("");
  const [baseExcess, setBaseExcess] = useState("");
  const [hb, setHb] = useState("");
  const [lactateLevel, setLactateLevel] = useState("");
  const [healingOfWound, setHealingOfWound] = useState("");
  const [CauseOfWound, setCauseOfWound] = useState("");
  const [LengthOfWound, setLengthOfWound] = useState("");
  const [DepthOfWound, setDepthOfWound] = useState("");
  const [WidthOfWound, setWidthOfWound] = useState("");
  const [ColorOfWound, setColorOfWound] = useState("");
  const [SurroundingSkinOfWound, setSurroundingSkinOfWound] = useState("");
  const [ExudatesOfWound, setExudatesOfWound] = useState("");
  const [DescriptionOfExudateOfWound, setDescriptionOfExudateOfWound] =
    useState("");
  const [OdorOfWound, setOdorOfWound] = useState("");
  const [PainOfWound, setPainOfWound] = useState("");
  const [conditionOfWound, setConditionOfWound] = useState("");
  const [leftPupilResponsiveness, setleftPupilResponsiveness] = useState("");
  const [rightPupilResponsiveness, setRightPupilResponsiveness] = useState("");
  const [reasonOfCurrentVisit, setReasonOfCurrentVisit] = useState("");
  const [impressions, setImpressions] = useState([]);
  const [matchedImpressions, setMatchedImpressions] = useState([]);
  const [postureAndDecubitus, setPostureAndDecubitus] = useState([]);
  const [selectedImpressions, setSelectedImpressions] = useState([]);
  const [odorsOfBreathAndBody, setOdorsOfBreathAndBody] = useState([]);
  const [urineTestDone, setUrineTestDone] = useState(null);
  const [faciesAndExpressions, setFaciesAndExpressions] = useState([]);
  const [medicalInterventions, setMedicalInterventions] = useState([]);
  const [respiratoryDistresses, setRespiratoryDistresses] = useState([]);
  const [respiratoryNoises, setRespiratoryNoises] = useState([]);
  const [percussions, setPercussions] = useState([]);
  const [palpations, setPalpations] = useState([]);
  const [airEntries, setAirEntries] = useState([]);
  const [UpcomingPlans, setUpcomingPlans] = useState([]);
  const [cough, setCough] = useState([]);
  const [doctorSpecailities, setDoctorSpecailities] = useState([]);
  const [clothingAndPharnalia, setClothingAndPharnalia] = useState([]);
  const [patientisArousableByVoice, setPatientisArousableByVoice] =
    useState(null);
  const [mentalPresentationSymptoms, setMentalPresentationSymptoms] = useState(
    []
  );
  const [mentalMedications, setMentalMedications] = useState([]);
  const [pressureSore, setPressureSore] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState(14);
  const [sores, setSores] = useState([]);
  const [venousBloodGasDone, setVenousBloodGasDone] = useState(null);
  const [patientAwake, setPatientAwake] = useState(false);
  const [temperature, setTemperature] = useState("");
  const [patientHasTrauma, setPatientHasTrauma] = useState(null);
  const [modeOfArrival, setModeOfArrival] = useState("");
  const [transferFromHosp, setTransferFromHosp] = useState("");
  const [
    medicalInterventionsSelectedOptions,
    setMedicalInterventionsSelectedOptions,
  ] = useState([]);
  const [painAssesment, setPainAssesment] = useState();
  const [lineOrTubes, setLineOrTubes] = useState("");
  const [referingDepartment, setReferingDepartment] = useState("");
  const [pregnencyStatus, setPregnencyStatus] = useState("");
  const [lastMenstruationPeriod, setLastMenstruationPeriod] = useState(null);
  const [addedPains, setAddedPains] = useState([]);
  const [prevPregnancies, setPrevPregnancies] = useState(null);
  const [numberOfMisCarriages, setNumberOfMisCarriages] = useState(null);
  const [timeOfOnset, setTimeOfOnset] = useState(null);
  const [dateFromOnset, setDateFromOnset] = useState(null);
  const [anyWound, setAnyWound] = useState(null);
  const [preferedMethod, setPreferedMethod] = useState("");
  const [rightPupil, setRightPupil] = useState("");
  const [skinIntact, setSkinIntact] = useState(false);
  const [airwayAssessmentRequired, setAirwayAssessmentRequired] = useState("");
  const [lines, setLines] = useState([]);
  const [pressureSores, setPressureSores] = useState([]);
  const [leftPupil, setLeftPupil] = useState("");
  const [frailtyScore, setFrailtyScore] = useState("");
  const [rightArmMovement, setRightArmMovement] = useState("");
  const [patientAppearnaceNormal, setPatientAppearnaceNormal] = useState(null);
  const [leftArmMovement, setLeftArmMovement] = useState("");
  const [rightLegMovement, setRightLegMovement] = useState("");
  const [leftLegMovement, setLefLegMovement] = useState("");
  const [checkedProblems, setCheckProblems] = useState([]);
  const [abdomenCirculations, setAbdomenCirculations] = useState([]);
  const [sourceOfBleeding, setSourceOfBleeding] = useState([]);
  const [urineOutPut, setUrineOutPut] = useState([]);
  const [PriorToComingMedications, setPriorToComingMedications] = useState([]);
  const [form17Options, setForm17Options] = useState([]);
  const [interventions, setInterventions] = useState([]);
  const [breathingAssessments, setBreathingAssessments] = useState([]);
  const [gradeOfPressureSore, setGradeOfPressureSore] = useState("");
  const [lineOrTubeSize, setLineOrTubeSize] = useState("");
  const [lineOrTubeInsertionSite, setLineOrTubeInsertionSite] = useState("");
  const [lineOrTubePatency, setLineOrTubePatency] = useState("");
  const [lineOrTubeInsertionDate, setLineOrTubeInsertionDate] = useState("");
  const [ValuableProperties, setValuableProperties] = useState("");
  const [painQ1, setPainQ1] = useState("");
  const [painQ2, setPainQ2] = useState("");
  const [painQ3, setPainQ3] = useState("");
  const [painQ4, setPainQ4] = useState("");
  const [painQ5, setPainQ5] = useState("");
  const [
    matchedMedicalInterventionsOptions,
    setMatchedMedicalInterventionsOptions,
  ] = useState([]);
  const [medicalInterventionSearchInput, setMedicalInterventionSearchInput] =
    useState("");
  const [accomodation, setAccomodation] = useState("");
  const [elimination, setElimination] = useState("");
  const [livesWith, setlivesWith] = useState("");
  const [mobility, setMobility] = useState("");
  const [seenByDoctorStatus, setSeenByDoctorStatus] = useState("");
  const [impressionSearchInput, setImpressionSearchInput] = useState("");
  const [UpcomingPlanSearchInput, setUpcomingPlanSearchInput] = useState("");
  const [disabilityAssesRequired, setDisabilityAssesRequired] = useState("");
  const [patientHasAllergy, setPatientHasAllergy] = useState(false);
  const [packageOfCare, setPackageOfCare] = useState("");
  const [smokingHistory, setSmokingHistory] = useState("");
  const [drinkingHistory, setDrinkingHistory] = useState("");
  const [circulationAssessments, setCirculationAssessments] = useState([]);
  const [E, setE] = useState("");
  const [V, setV] = useState("");
  const [M, setM] = useState("");
  const [AUPU, setAVPU] = useState("");
  const [
    pastMedicalHistorySelectedOptions,
    setPastMedicalHistorySelectedOptions,
  ] = useState([]);
  const [medicationsSelectedOptions, setMedicationsSelectedOptions] = useState(
    []
  );
  const [
    matchedPastMedicalHistoryOptions,
    setMatchedPastMedicalHistoryOptions,
  ] = useState([]);
  const [matchedMedicationsOptions, setMatchedMedicationsOptions] = useState(
    []
  );
  const [searchInput, setSearchInput] = useState("");
  const [medicationSearchInput, setMedicationSearchInput] = useState("");


  const divRef = useRef();

  const handleDownloadPdf = () => {
    const input = divRef.current;
    const scale = 2; // Adjust this scale for higher quality
    html2canvas(input, { useCORS: true, scale }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Nursing Qs.pdf');
    });
  };


  const handleSearchInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    // Filter the options based on the search input
    const matchedOptions = pastMedicalHistoryOptions.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedPastMedicalHistoryOptions(matchedOptions);
  };

  const handleRemoveImpression = (optionToRemove) => {
    const updatedOptions = nursingImpressions.filter(
      (option) => option !== optionToRemove
    );
    setNursingImpressions(updatedOptions);
  };

  const handleRemoveUpPlan = (optionToRemove) => {
    const updatedOptions = UpcomingPlans.filter(
      (option) => option !== optionToRemove
    );
    setUpcomingPlans(updatedOptions);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // Prevent the default action of the Enter key (e.g., form submission)
      e.preventDefault();
      // Add the current input value to the array and clear the input field
      if (impressionSearchInput.trim() !== "") {
        console.log(impressionSearchInput);
        setNursingImpressions([...nursingImpressions, impressionSearchInput]);
        setImpressionSearchInput("");
      }
    }
  };
  const handleUpPlanKeyDown = (e) => {
    if (e.key === "Enter") {
      // Prevent the default action of the Enter key (e.g., form submission)
      e.preventDefault();
      // Add the current input value to the array and clear the input field
      if (UpcomingPlanSearchInput.trim() !== "") {
        setUpcomingPlans([...UpcomingPlans, UpcomingPlanSearchInput]);
        setUpcomingPlanSearchInput("");
      }
    }
  };

  const handleMedicationsSearchInputChange = (e) => {
    const value = e.target.value;
    setMedicationSearchInput(value);
    // Filter the options based on the search input
    const matchedOptions = medicationsList.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedMedicationsOptions(matchedOptions);
  };
  const handleImpressionsSearchInputChange = (e) => {
    const value = e.target.value;
    setImpressionSearchInput(value);
    // Filter the options based on the search input
    const matchedOptions = medicationsList.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedImpressions(matchedOptions);
  };
  const handleInterventionsSearchInput = (e) => {
    const value = e.target.value;
    setMedicalInterventionSearchInput(value);
    // Filter the options based on the search input
    const matchedOptions = medicationsList.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setMatchedMedicalInterventionsOptions(matchedOptions);
  };

  const handleOptionClick = (option) => {
    // Add the selected option to the selectedOptions array
    setPastMedicalHistorySelectedOptions([
      ...pastMedicalHistorySelectedOptions,
      option,
    ]);
    // Clear the search input and matched options
    setSearchInput("");
    setMatchedPastMedicalHistoryOptions([]);
  };

  const handleImpressionsOptionClick = (option) => {
    // Add the selected option to the selectedOptions array
    setSelectedImpressions([...selectedImpressions, option]);
    // Clear the search input and matched options
    setImpressionSearchInput("");
    setMatchedImpressions([]);
  };

  const handleMedicalInterventionClick = (option) => {
    // Add the selected option to the selectedOptions array
    setMedicalInterventionsSelectedOptions([
      ...medicalInterventionsSelectedOptions,
      option,
    ]);
    // Clear the search input and matched options
    setMedicalInterventionSearchInput("");
    setMatchedMedicalInterventionsOptions([]);
  };

  const handleMedicationOptionClick = (option) => {
    // Add the selected option to the selectedOptions array
    setMedicationsSelectedOptions([...medicationsSelectedOptions, option]);
    // Clear the search input and matched options
    setMedicationSearchInput("");
    setMatchedMedicationsOptions([]);
  };

  const handleRemoveOption = (optionToRemove) => {
    // Remove the option from the selectedOptions array
    const updatedOptions = pastMedicalHistorySelectedOptions.filter(
      (option) => option !== optionToRemove
    );
    setPastMedicalHistorySelectedOptions(updatedOptions);
  };

  const handleImpressionsRemoveOption = (optionToRemove) => {
    // Remove the option from the selectedOptions array
    const updatedOptions = selectedImpressions.filter(
      (option) => option !== optionToRemove
    );
    setSelectedImpressions(updatedOptions);
  };

  const handleMedicationsRemoveOption = (optionToRemove) => {
    // Remove the option from the selectedOptions array
    const updatedOptions = medicationsSelectedOptions.filter(
      (option) => option !== optionToRemove
    );
    setMedicationsSelectedOptions(updatedOptions);
  };

  const handleMedicalInterventionsRemoveOption = (optionToRemove) => {
    // Remove the option from the selectedOptions array
    const updatedOptions = medicalInterventionsSelectedOptions.filter(
      (option) => option !== optionToRemove
    );
    setMedicalInterventionsSelectedOptions(updatedOptions);
  };

  const handleAddPains = (e) => {
    e.preventDefault();

    const newPain = {
      d1: e.target.pain_name.value,
      d2: e.target.pain_spread.value,
      d3: e.target.pain_con.value,
      d4: e.target.pain_type.value,
      d5: e.target.pain_time.value,
      d6: e.target.pain_severe.value,
    };

    console.log(newPain);

    setAddedPains((prevPains) => [...prevPains, newPain]);
    console.log(addedPains);

    setOptionsModalShowing(false);
    setAddPainsFormShowing(false);
  };

  const handleAddLines = (e) => {
    e.preventDefault();

    const newLine = {
      d1: e.target.line_name.value,
      d2: e.target.line_site.value,
      d3: e.target.line_date.value,
      d4: e.target.line_size.value,
      d5: e.target.line_patency.value,
    };

    setLines((prevLines) => [...prevLines, newLine]);
    console.log(lines);

    setOptionsModalShowing(false);
    setAddLinesFormShowing(false);
  };

  const handleAddSores = (e) => {
    e.preventDefault();

    const newSore = {
      d1: e.target.sore_name.value,
      d2: e.target.sore_site.value,
      d3: e.target.sore_grade.value,
      d4: e.target.sore_size.value,
      d5: e.target.sore_desc.value,
    };

    setSores((prevSores) => [...prevSores, newSore]);

    setOptionsModalShowing(false);
    setAddSoresFormShowing(false);
  };

  const handleAddMentalMedications = (e) => {
    e.preventDefault();

    const newMedication = {
      d1: e.target.med_name.value,
      d2: e.target.time.value,
      d3: e.target.dose.value,
    };

    console.log(newMedication);

    setMentalMedications((prevMeds) => [...prevMeds, newMedication]);
    console.log(mentalMedications);

    setOptionsModalShowing(false);
    setAddMentalMedicationFormShowing(false);
  };
  const handleAddPriorToComingMedications = (e) => {
    e.preventDefault();

    const newMedication = {
      d1: e.target.med_name.value,
      d2: e.target.time.value,
      d3: e.target.dose.value,
    };

    console.log(newMedication);

    setPriorToComingMedications((prevMeds) => [...prevMeds, newMedication]);
    console.log(mentalMedications);

    setOptionsModalShowing(false);
    setAddPriorToComingMedicationsFormShowing(false);
  };

  const medicationsList = [
    "Abacavir",
    "Abacavir with dolutegravir and lamivudine",
    "Abacavir with lamivudine",
    "Abacavir with lamivudine and zidovudine",
    "Abatacept",
    "Abemaciclib [Specialist drug]",
    "Abiraterone acetate",
    "Abrocitinib",
    "Acalabrutinib [Specialist drug]",
    "Acamprosate calcium",
    "Acarbose",
    "Acebutolol",
    "Aceclofenac",
    "Acenocoumarol",
    "Acetazolamide",
    "Acetylcholine chloride",
    "Acetylcysteine",
    "Aciclovir",
    "Acipimox",
    "Acitretin",
    "Aclidinium bromide",
    "Aclidinium bromide with formoterol",
    "Acrivastine",
    "Adalimumab",
    "Adapalene",
    "Adapalene with benzoyl peroxide",
    "Adefovir dipivoxil",
    "Adenosine",
    "Adrenaline with articaine hydrochloride",
    "Adrenaline/epinephrine",
    "Afatinib [Specialist drug]",
    "Aflibercept [Specialist drug]",
    "Agalsidase alfa",
    "Agalsidase beta",
    "Agomelatine",
    "Albendazole",
    "Albumin solution",
    "Alclometasone dipropionate",
    "Alcohol",
    "Aldesleukin [Specialist drug]",
    "Alectinib [Specialist drug]",
    "Alemtuzumab",
    "Alendronic acid",
    "Alendronic acid with colecalciferol",
    "Alfacalcidol",
    "Alfentanil",
    "Alfuzosin hydrochloride",
    "Alginic acid",
    "Alglucosidase alfa",
    "Alimemazine tartrate",
    "Alirocumab",
    "Aliskiren",
    "Alitretinoin",
    "Allopurinol",
    "Almond oil",
    "Almotriptan",
    "Alogliptin",
    "Alogliptin with metformin",
    "Alpelisib [Specialist drug]",
    "Alpha tocopherol",
    "Alpha tocopheryl acetate",
    "Alprazolam",
    "Alprostadil",
    "Alteplase",
    "Aluminium acetate",
    "Aluminium chloride hexahydrate",
    "Alverine citrate",
    "Alverine with simeticone",
    "Amantadine hydrochloride",
    "Ambrisentan",
    "Amifampridine",
    "Amikacin",
    "Amiloride hydrochloride",
    "Amiloride with bumetanide",
    "Aminophylline",
    "Aminosalicylic acid",
    "Amiodarone hydrochloride",
    "Amisulpride",
    "Amitriptyline hydrochloride",
    "Amivantamab [Specialist drug]",
    "Amlodipine",
    "Amlodipine with valsartan",
    "Amorolfine",
    "Amoxicillin",
    "Amphotericin B",
    "Ampicillin",
    "Amsacrine [Specialist drug]",
    "Anagrelide [Specialist drug]",
    "Anakinra",
    "Anastrozole",
    "Andexanet alfa",
    "Anethol with borneol, camphene, cineole, fenchone and pinene",
    "Angiotensin II",
    "Anidulafungin",
    "Antazoline with xylometazoline",
    "Anthrax vaccine",
    "Anti-D (Rh0) immunoglobulin",
    "Antithymocyte immunoglobulin (rabbit)",
    "Apalutamide",
    "Apixaban",
    "Apomorphine hydrochloride",
    "Apraclonidine",
    "Apremilast",
    "Aprepitant",
    "Arachis oil",
    "Argatroban monohydrate",
    "Aripiprazole",
    "Arsenic trioxide [Specialist drug]",
    "Artemether with lumefantrine",
    "Artenimol with piperaquine phosphate",
    "Asciminib [Specialist drug]",
    "Ascorbic acid",
    "Asenapine",
    "Asfotase alfa",
    "Asparaginase [Specialist drug]",
    "Aspirin",
    "Aspirin with codeine",
    "Aspirin with metoclopramide",
    "Ataluren",
    "Atazanavir",
    "Atazanavir with cobicistat",
    "Atenolol",
    "Atezolizumab [Specialist drug]",
    "Atogepant",
    "Atomoxetine",
    "Atorvastatin",
    "Atosiban",
    "Atovaquone",
    "Atovaquone with proguanil hydrochloride",
    "Atracurium besilate",
    "Atropine sulfate",
    "Avacopan",
    "Avalglucosidase alfa",
    "Avanafil",
    "Avapritinib [Specialist drug]",
    "Avatrombopag",
    "Avelumab [Specialist drug]",
    "Aviptadil with phentolamine mesilate",
    "Axitinib [Specialist drug]",
    "Azacitidine [Specialist drug]",
    "Azathioprine",
    "Azelaic acid",
    "Azelastine hydrochloride",
    "Azilsartan medoxomil",
    "Azithromycin",
    "Aztreonam",
    "Bacillus Calmette-Guérin [Specialist drug]",
    "Bacillus Calmette-Guérin vaccine",
    "Baclofen",
    "Baloxavir marboxil",
    "Balsalazide sodium",
    "Bambuterol hydrochloride",
    "Baricitinib",
    "Barrier creams and ointments",
    "Basiliximab",
    "Beclometasone dipropionate",
    "Beclometasone with formoterol",
    "Beclometasone with formoterol and glycopyrronium",
    "Bedaquiline",
    "Bee venom extract",
    "Belantamab mafodotin [Specialist drug]",
    "Belatacept",
    "Belimumab",
    "Belumosudil",
    "Belzutifan [Specialist drug]",
    "Bemiparin sodium",
    "Bempedoic acid",
    "Bempedoic acid with ezetimibe",
    "Bendamustine hydrochloride [Specialist drug]",
    "Bendroflumethiazide",
    "Benperidol",
    "Benralizumab",
    "Benzalkonium chloride",
    "Benzathine benzylpenicillin",
    "Benzoic acid with salicylic acid",
    "Benzoyl peroxide",
    "Benzoyl peroxide with clindamycin",
    "Benzydamine hydrochloride",
    "Benzyl benzoate",
    "Benzyl benzoate with bismuth oxide, bismuth subgallate, hydrocortisone acetate, peru balsam and zinc oxide",
    "Benzylpenicillin sodium",
    "Berotralstat",
    "Betahistine dihydrochloride",
    "Betaine",
    "Betamethasone",
    "Betamethasone with clioquinol",
    "Betamethasone with clotrimazole",
    "Betamethasone with fusidic acid",
    "Betamethasone with neomycin",
    "Betamethasone with salicylic acid",
    "Betaxolol",
    "Bethanechol chloride",
    "Bevacizumab [Specialist drug]",
    "Bexarotene [Specialist drug]",
    "Bezafibrate",
    "Bezlotoxumab",
    "Bicalutamide",
    "Bictegravir with emtricitabine and tenofovir alafenamide",
    "Bilastine",
    "Bimatoprost",
    "Bimatoprost with timolol",
    "Bimekizumab",
    "Binimetinib [Specialist drug]",
    "Biphasic insulin aspart",
    "Biphasic insulin lispro",
    "Biphasic isophane insulin",
    "Birch bark extract",
    "Bisacodyl",
    "Bismuth subsalicylate",
    "Bisoprolol fumarate",
    "Bivalirudin",
    "Bleomycin [Specialist drug]",
    "Blinatumomab [Specialist drug]",
    "Borneol with camphene, cineole, menthol, menthone and pinene",
    "Bortezomib [Specialist drug]",
    "Bosentan",
    "Bosutinib [Specialist drug]",
    "Botulinum toxin type A",
    "Botulism antitoxin",
    "Brentuximab vedotin [Specialist drug]",
    "Brigatinib [Specialist drug]",
    "Brimonidine tartrate",
    "Brimonidine with timolol",
    "Brinzolamide",
    "Brinzolamide with brimonidine",
    "Brinzolamide with timolol",
    "Brivaracetam",
    "Brodalumab",
    "Brolucizumab [Specialist drug]",
    "Bromfenac",
    "Bromocriptine",
    "Budesonide",
    "Budesonide with formoterol",
    "Bulevirtide",
    "Bumetanide",
    "Bupivacaine hydrochloride",
    "Bupivacaine with adrenaline",
    "Bupivacaine with fentanyl",
    "Buprenorphine",
    "Buprenorphine with naloxone",
    "Bupropion hydrochloride",
    "Burosumab",
    "Buserelin",
    "Buspirone hydrochloride",
    "Busulfan [Specialist drug]",
    "C1-esterase inhibitor",
    "Cabazitaxel [Specialist drug]",
    "Cabergoline",
    "Cabotegravir",
    "Cabozantinib [Specialist drug]",
    "Calamine with zinc oxide",
    "Calcifediol monohydrate",
    "Calcipotriol",
    "Calcipotriol with betamethasone",
    "Calcitonin (salmon)",
    "Calcitriol",
    "Calcium acetate",
    "Calcium acetate with magnesium carbonate",
    "Calcium carbonate",
    "Calcium carbonate with calcium lactate gluconate",
    "Calcium chloride",
    "Calcium gluconate",
    "Calcium lactate",
    "Calcium phosphate",
    "Calcium polystyrene sulfonate",
    "Camellia sinensis",
    "Canagliflozin",
    "Canagliflozin with metformin",
    "Canakinumab",
    "Candesartan cilexetil",
    "Cangrelor",
    "Cannabidiol",
    "Cannabis extract",
    "Capecitabine [Specialist drug]",
    "Caplacizumab",
    "Capsaicin",
    "Captopril",
    "Carbamazepine",
    "Carbetocin",
    "Carbimazole",
    "Carbocisteine",
    "Carbomers",
    "Carboplatin [Specialist drug]",
    "Carboprost",
    "Carfilzomib [Specialist drug]",
    "Carglumic acid",
    "Cariprazine",
    "Carmellose sodium",
    "Carmustine [Specialist drug]",
    "Carvedilol",
    "Caspofungin",
    "Castor oil with collodion and colophony",
    "Cefaclor",
    "Cefadroxil",
    "Cefalexin",
    "Cefazolin",
    "Cefepime",
    "Cefiderocol",
    "Cefixime",
    "Cefotaxime",
    "Cefoxitin",
    "Cefradine",
    "Ceftaroline fosamil",
    "Ceftazidime",
    "Ceftazidime with avibactam",
    "Ceftobiprole",
    "Ceftolozane with tazobactam",
    "Ceftriaxone",
    "Cefuroxime",
    "Celecoxib",
    "Celiprolol hydrochloride",
    "Cemiplimab [Specialist drug]",
    "Cenobamate",
    "Ceritinib [Specialist drug]",
    "Certolizumab pegol",
    "Cetirizine hydrochloride",
    "Cetrimide with undecenoic acid",
    "Cetrorelix",
    "Cetuximab [Specialist drug]",
    "Charcoal, activated",
    "Chenodeoxycholic acid",
    "Chloral hydrate",
    "Chlorambucil [Specialist drug]",
    "Chloramphenicol",
    "Chlordiazepoxide hydrochloride",
    "Chlorhexidine",
    "Chlorhexidine gluconate with isopropyl alcohol",
    "Chlorhexidine with cetrimide",
    "Chlorhexidine with lidocaine",
    "Chlorhexidine with neomycin",
    "Chlorhexidine with nystatin",
    "Chlormethine [Specialist drug]",
    "Chloroprocaine hydrochloride",
    "Chloroquine",
    "Chlorphenamine maleate",
    "Chlorpromazine hydrochloride",
    "Chlortalidone",
    "Cholera vaccine (inactivated)",
    "Cholera vaccine (live)",
    "Cholic acid",
    "Choline salicylate",
    "Choriogonadotropin alfa",
    "Ciclesonide",
    "Ciclosporin",
    "Cidofovir",
    "Cilostazol",
    "Cimetidine",
    "Cinacalcet",
    "Cinchocaine with hydrocortisone",
    "Cinchocaine with prednisolone",
    "Cinnarizine",
    "Cinnarizine with dimenhydrinate",
    "Cipaglucosidase alfa",
    "Ciprofibrate",
    "Ciprofloxacin",
    "Ciprofloxacin with dexamethasone",
    "Ciprofloxacin with fluocinolone acetonide",
    "Cisatracurium",
    "Cisplatin [Specialist drug]",
    "Citalopram",
    "Citric acid",
    "Citric acid with magnesium carbonate",
    "Citric acid with potassium citrate",
    "Cladribine",
    "Clarithromycin",
    "Clindamycin",
    "Clobazam",
    "Clobetasol propionate",
    "Clobetasol propionate with neomycin sulfate and nystatin",
    "Clobetasone butyrate",
    "Clobetasone butyrate with nystatin and oxytetracycline",
    "Clofarabine [Specialist drug]",
    "Clofazimine",
    "Clomethiazole",
    "Clomifene citrate",
    "Clomipramine hydrochloride",
    "Clonazepam",
    "Clonidine hydrochloride",
    "Clopidogrel",
    "Clotrimazole",
    "Clozapine",
    "Coal tar",
    "Coal tar with calamine",
    "Coal tar with coconut oil and salicylic acid",
    "Coal tar with dithranol and salicylic acid",
    "Coal tar with salicylic acid",
    "Coal tar with salicylic acid and precipitated sulfur",
    "Coal tar with zinc oxide",
    "Co-amilofruse",
    "Co-amilozide",
    "Co-amoxiclav",
    "Co-beneldopa",
    "Cobicistat",
    "Cobimetinib [Specialist drug]",
    "Co-careldopa",
    "Co-codamol",
    "Co-cyprindiol",
    "Co-danthramer",
    "Co-danthrusate",
    "Codeine phosphate",
    "Co-fluampicil",
    "Co-flumactone",
    "Colchicine",
    "Colecalciferol",
    "Colecalciferol with calcium carbonate",
    "Colecalciferol with calcium phosphate",
    "Colesevelam hydrochloride",
    "Colestipol hydrochloride",
    "Colestyramine",
    "Colistimethate sodium",
    "Co-magaldrox",
    "Conestat alfa",
    "Conjugated oestrogens (equine)",
    "Conjugated oestrogens with medroxyprogesterone",
    "Co-phenotrope",
    "Co-simalcite",
    "Co-tenidone",
    "Co-trimoxazole",
    "COVID-19 vaccine",
    "Cranberry",
    "Crisantaspase [Specialist drug]",
    "Crizanlizumab",
    "Crizotinib [Specialist drug]",
    "Crotamiton",
    "Cyanocobalamin",
    "Cyclizine",
    "Cyclopentolate hydrochloride",
    "Cyclophosphamide",
    "Cycloserine",
    "Cyproheptadine hydrochloride",
    "Cyproterone acetate",
    "Cytarabine [Specialist drug]",
    "Cytisinicline",
    "Cytomegalovirus immunoglobulin",
  ];

  const pastMedicalHistoryOptions = [
    "HIV and AIDS",
    "Acute rheumatic fever and rheumatic heart disease",
    "Anaphylaxis",
    "Hay fever",
    "Lactose intolerance in babies",
    "Alzheimer’s disease",
    "Anaemia",
    "Anaphylaxis",
    "Angina",
    "Ankylosing spondylitis",
    "Anorexia nervosa",
    "Eating disorders",
    "Anxiety – reversing the vicious cycle",
    "Anxiety and panic",
    "Generalised anxiety disorder – emotional health for new parents",
    "Arrhythmias (abnormal heart rhythms)",
    "Osteoarthritis",
    "Rheumatoid arthritis",
    "Asthma",
    "Atrial fibrillation",
    "Autism",
    "Bacterial vaginosis",
    "Ross River virus and Barmah Forest virus",
    "Bipolar disorder",
    "Urinary tract infections (UTIs)",
    "Bleeding or pain in early pregnancy",
    "Blocked milk ducts",
    "Ebolavirus disease (EVD)",
    "Hepatitis B",
    "Hepatitis C",
    "HIV and AIDS",
    "Chest injuries and rib fractures",
    "Shoulder dislocation",
    "Botulism",
    "Bowel cancer",
    "Colorectal cancer",
    "Breast cancer",
    "Bronchiolitis",
    "Bulimia nervosa",
    "Eating disorders",
    "Campylobacter infection",
    "Bowel cancer",
    "Breast cancer",
    "Cervical cancer",
    "Colorectal cancer",
    "Diethylstilbestrol (DES) and cancer",
    "Gynaecological cancer",
    "Haematological (blood) cancer",
    "Head and neck cancer",
    "Human papillomavirus (HPV)",
    "Lung cancer",
    "Melanoma and skin cancer",
    "Ovarian cancer",
    "Prostate cancer",
    "Skin cancer",
    "Stomach and oesophageal cancer",
    "Upper gastro intestinal cancer",
    "Urological cancer",
    "Candida auris",
    "CPO (Carbapenemase-producing organisms)",
    "Cardiomyopathy",
    "Carpal tunnel syndrome",
    "Cerebral palsy",
    "Cervical cancer",
    "Gynaecological cancer",
    "Chest injuries and rib fractures",
    "Chest pain",
    "Chickenpox (varicella)",
    "Chlamydia",
    "Cholera",
    "Overweight and obesity",
    "Chronic obstructive pulmonary disease (COPD)",
    "Coeliac disease",
    "Common cold",
    "Colorectal cancer",
    "Colour blindness",
    "Complex regional pain syndrome",
    "Concussion",
    "Constipation",
    "Coronary heart disease",
    "COVID-19 (coronavirus)",
    "Croup",
    "Cryptosporidium infection (Cryptosporidiosis)",
    "Cystic fibrosis",
    "Deafness",
    "Decompression illness",
    "Deep vein thrombosis",
    "Alzheimer’s disease",
    "Motor neurone disease (MND)",
    "Parkinson's",
    "Depression – reversing the vicious cycle",
    "Eczema (atopic dermatitis)",
    "Diabetes Type 1",
    "Diabetes Type 2",
    "Diarrhoea and vomiting",
    "Vomiting",
    "Diarrhoea",
    "Botulism",
    "Bowel cancer",
    "Campylobacter infection",
    "Cholera",
    "Coeliac disease",
    "Colorectal cancer",
    "Cryptosporidium infection (Cryptosporidiosis)",
    "Gastroenteritis",
    "Hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "Lactose intolerance in babies",
    "Norovirus",
    "Salmonella infection",
    "Shiga toxin producing E. coli (STEC) and haemolytic uraemic syndrome (HUS)",
    "Shigella infection and dysentery",
    "Upper gastro intestinal cancer",
    "Diphtheria",
    "Anorexia nervosa",
    "Bulimia nervosa",
    "Eating disorders",
    "Ebolavirus disease (EVD)",
    "Ectopic pregnancy",
    "Eczema (atopic dermatitis)",
    "Engorgement",
    "Epilepsy",
    "Eye injury – foreign object in the eye",
    "Glaucoma",
    "Hyphaema",
    "Familial hypercholesterolaemia",
    "Febrile convulsions",
    "Fibromyalgia",
    "Influenza (flu)",
    "Influenza (flu) pandemic",
    "Botulism",
    "Food poisoning",
    "Salmonella infection",
    "Shigella infection and dysentery",
    "Campylobacter infection",
    "Cholera",
    "Cryptosporidium infection (Cryptosporidiosis)",
    "Gastroenteritis",
    "Giardia infection (giardiasis)",
    "Norovirus",
    "Rotavirus",
    "Shiga toxin producing E. coli (STEC) and haemolytic uraemic syndrome (HUS)",
    "Eczema (atopic dermatitis)",
    "Genetic conditions",
    "Genetic paediatric services",
    "Hyperthyroidism (overactive thyroid)",
    "Hypothyroidism (underactive thyroid)",
    "Rare diseases",
    "Your family health history",
    "Herpes (HSV)",
    "Genital warts",
    "German measles (rubella)",
    "Glaucoma",
    "Gonorrhoea",
    "Gout",
    "Tooth decay and gum disease",
    "Gynaecological cancer",
    "Hand, foot and mouth disease",
    "Hay fever",
    "Head lice",
    "Headache",
    "Healthcare associated infections",
    "Heart attack",
    "Acute rheumatic fever and rheumatic heart disease",
    "Angina",
    "Arrhythmias (abnormal heart rhythms)",
    "Atrial fibrillation",
    "Cardiac rehabilitation",
    "Cardiomyopathy",
    "Congenital heart defects",
    "Coronary heart disease",
    "Heart attack",
    "Heart failure",
    "Stroke",
    "Hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "Herpes (HSV)",
    "High blood pressure (HTN)",
    "High cholesterol",
    "HIV and AIDS",
    "Human papillomavirus (HPV)",
    "Hyperthyroidism (overactive thyroid)",
    "Hyphaema",
    "Hypothyroidism (underactive thyroid)",
    "Impetigo (school sores)",
    "Infectious diseases found overseas",
    "Haemophilus influenzae type B (Hib)",
    "Influenza (flu)",
    "Influenza (flu) pandemic",
    "Japanese encephalitis",
    "Kidney stones",
    "Murray Valley encephalitis and Kunjin viruses",
    "Lactose intolerance in babies",
    "Legionnaires' disease",
    "Listeria infection",
    "Lymphogranuloma venereum (LGV)",
    "Malaria",
    "Mastitis",
    "German measles (rubella)",
    "Measles",
    "Melanoma and skin cancer",
    "Skin cancer",
    "Viral meningitis",
    "Meningococcal disease",
    "Alzheimer’s disease",
    "Anorexia nervosa",
    "Anxiety – reversing the vicious cycle",
    "Anxiety and panic",
    "Bipolar disorder",
    "Bulimia nervosa",
    "Delusions",
    "Depression – reversing the vicious cycle",
    "Eating disorders",
    "Generalised anxiety disorder – emotional health for new parents",
    "Hallucinations and hearing voices",
    "Nightmares and flashbacks",
    "Obsessive compulsive disorder – emotional health for new parents",
    "Panic disorder – emotional health for new parents",
    "Phobias – emotional health for new parents",
    "Post-traumatic stress disorder – emotional health for new parents",
    "Schizophrenia",
    "Community associated MRSA (CA-MRSA)",
    "MRSA (methicillin resistant staphylococcus aureus)",
    "MRSA in hospitals",
    "Pregnancy loss",
    "Molluscum contagiosum",
    "Mpox (monkeypox)",
    "Morning sickness",
    "Japanese encephalitis",
    "Malaria",
    "Murray Valley encephalitis and Kunjin viruses",
    "Ross River virus and Barmah Forest virus",
    "Yellow fever",
    "Motor neurone disease (MND)",
    "Multiple sclerosis",
    "Mumps",
    "Autism",
    "Parkinson's",
    "Non-specific urethritis (NSU)",
    "Norovirus",
    "Nose bleeds",
    "Overweight and obesity",
    "Obsessive compulsive disorder – emotional health for new parents",
    "Osteoarthritis",
    "Osteoporosis",
    "Gynaecological cancer",
    "Ovarian cancer",
    "Bleeding or pain in early pregnancy",
    "Complex regional pain syndrome",
    "Fibromyalgia",
    "Low back pain",
    "Neck pain",
    "Rheumatoid arthritis",
    "Arrhythmias (abnormal heart rhythms)",
    "Panic disorder – emotional health for new parents",
    "Typhoid and paratyphoid fever",
    "Slapped cheek syndrome (Parvovirus)",
    "Pelvic inflammatory disease (PID)",
    "Phobias – emotional health for new parents",
    "Pneumococcal disease",
    "Pneumonia",
    "Post-traumatic stress disorder (PTSD)",
    "Prostate cancer",
    "Urological cancer",
    "Pubic lice",
    "Q fever",
    "Rabies and lyssavirus",
    "Rare diseases",
    "Cardiac rehabilitation",
    "Respiratory syncytial virus (RSV)",
    "Acute rheumatic fever and rheumatic heart disease",
    "Ross River virus and Barmah Forest virus",
    "German measles (rubella)",
    "Salmonella infection",
    "Scabies",
    "Scarlet fever",
    "Scoliosis",
    "Bacterial vaginosis",
    "Chlamydia",
    "Genital warts",
    "Gonorrhoea",
    "Herpes (HSV)",
    "HIV and AIDS",
    "Human papillomavirus (HPV)",
    "Lymphogranuloma venereum (LGV)",
    "Non-specific urethritis (NSU)",
    "Pelvic inflammatory disease (PID)",
    "Pubic lice",
    "Sexually transmissible infections (STIs)",
    "Syphilis",
    "Syphilis in pregnancy",
    "Trichomoniasis",
    "Shiga toxin producing E. coli (STEC) and haemolytic uraemic syndrome (HUS)",
    "Shigella infection and dysentery",
    "Shingles",
    "Skin lesions",
    "Sprain",
    "Stomach and oesophageal cancer",
    "Stomach pain",
    "Epilepsy",
    "Stroke",
    "Testicular conditions",
    "Tetanus",
    "Threadworms",
    "Thrush (genital)",
    "Hyperthyroidism (overactive thyroid)",
    "Hypothyroidism (underactive thyroid)",
    "Tonsillitis",
    "Tooth decay and gum disease",
    "Trauma",
    "Anita Clayton Centre",
    "Tuberculosis",
    "Urinary tract infections (UTIs)",
    "Vancomycin-resistant Enterococci (VRE)",
    "Chickenpox (varicella)",
    "Common cold",
    "COVID-19 (coronavirus)",
    "Diarrhoea and vomiting",
    "Wheezing in children",
    "Whooping cough (pertussis)",
    "Wounds",
    "Zika virus",
  ];

  const handleCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setCheckProblems((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleAbodmenCirculationCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setAbdomenCirculations((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleSourceOfBleedingCirculationCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setSourceOfBleeding((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleUrineOutputCirculationCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setUrineOutPut((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleRespiratoryDistressCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setRespiratoryDistresses((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleRespiratoryNoiseCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setRespiratoryNoises((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handlePercussionsCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setPercussions((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handlePalpationsCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setPalpations((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleAirEntriesCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    airEntries((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleCoughCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setCough((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleDoctorSpecialityChange = (event) => {
    const value = event.target.value;
    setDoctorSpecailities((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleMentalSymptomsCheckboxChange = (event) => {
    console.log(mentalPresentationSymptoms);
    const value = event.target.value;
    setMentalPresentationSymptoms((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleLineOrTubesCheckboxChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setCheckProblems((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handlePressureSoreChange = (event) => {
    console.log(checkedProblems);
    const value = event.target.value;
    setPressureSores((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleForm17CheckboxChange = (event) => {
    console.log(form17Options);
    const value = event.target.value;
    setForm17Options((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handlePostureAndDecubitusCheckboxChange = (event) => {
    console.log(form17Options);
    const value = event.target.value;
    setPostureAndDecubitus((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleOdorOfBreathAndBodyCheckboxChange = (event) => {
    console.log(form17Options);
    const value = event.target.value;
    setOdorsOfBreathAndBody((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleClothingCheckboxChange = (event) => {
    console.log(clothingAndPharnalia);
    const value = event.target.value;
    setClothingAndPharnalia((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };
  const handleFaciesAndExpressionsCheckboxChange = (event) => {
    const value = event.target.value;
    setFaciesAndExpressions((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleInterventionsCheckboxChange = (event) => {
    console.log(interventions);
    const value = event.target.value;
    setInterventions((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleBreathingAssessmentsCheckboxChange = (event) => {
    console.log(breathingAssessments);
    const value = event.target.value;
    setBreathingAssessments((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleCirculationAssessmentsCheckboxChange = (event) => {
    console.log(circulationAssessments);
    const value = event.target.value;
    setCirculationAssessments((prev) =>
      event.target.checked
        ? [...prev, value]
        : prev.filter((item) => item !== value)
    );
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handlePregnencyStatus = (event) => {
    setPregnencyStatus(event.target.value);
  };

  const handleSymptomsStartTime = (event) => {};

  const handleModeOfArrivalChange = (event) => {
    setModeOfArrival(event.target.value);
  };

  const handleGradeOfPressureSoreChange = (event) => {
    setGradeOfPressureSore(event.target.value);
  };

  const handleEChange = (event) => {
    setE(event.target.value);
  };

  const handleVChange = (event) => {
    setV(event.target.value);
  };

  const handleMChange = (event) => {
    setM(event.target.value);
  };

  const handleAVPUChange = (event) => {
    setAVPU(event.target.value);
  };

  const handleOnsetDateSubmit = (e) => {
    let date = {
      years: e.target.year,
      months: e.target.months,
      weeks: e.target.weeks,
      days: e.target.days,
    };

    setDateFromOnset(date);
  };

  const setMaxAndMinValuesForPregDate = () => {
    var currentDate = new Date();

    var maxDate = currentDate.toISOString().split("T")[0];
    currentDate.setMonth(currentDate.getMonth() - 9);

    var minDate = currentDate.toISOString().split("T")[0];

    document
      .getElementById("last-menstruation-period-id")
      .setAttribute("min", minDate);
    document
      .getElementById("last-menstruation-period-id")
      .setAttribute("max", maxDate);
  };

  useEffect(() => {
    const currentDate = new Date();

    const maxDateStr = currentDate.toISOString().split("T")[0];

    // Calculate 9 months ago
    currentDate.setMonth(currentDate.getMonth() - 9);

    // Set min date to 9 months ago
    const minDateStr = currentDate.toISOString().split("T")[0];

    // Update state with min and max dates
    setMinDate(minDateStr);
    setMaxDate(maxDateStr);
  }, []);

  return (
    <>
      {optionsModalShowing ? (
        <div className="options-modal">
          <div className="center">
            {a4FormShowing == true ? (
              <>
                <div className="radio-input">
                  <div className="label mb-3">
                    Please Specify the mobility on arrival:
                  </div>
                  <div className="options">
                    <div className="my-option">
                      <input
                        type="radio"
                        name="mode-of-arrival"
                        checked={modeOfArrival == "Ambulatory"}
                        onChange={handleModeOfArrivalChange}
                        value="Ambulatory"
                        id="Ambulatory"
                      />
                      <label htmlFor="Ambulatory">Ambulatory</label>
                    </div>
                    <div className="my-option">
                      <input
                        type="radio"
                        name="mode-of-arrival"
                        checked={modeOfArrival == "On wheelchair"}
                        onChange={handleModeOfArrivalChange}
                        value="On wheelchair"
                        id="On wheelchair"
                      />
                      <label htmlFor="On wheelchair">On wheelchair</label>
                    </div>
                    <div className="my-option">
                      <input
                        type="radio"
                        name="mode-of-arrival"
                        checked={modeOfArrival == "Walking with stick"}
                        onChange={handleModeOfArrivalChange}
                        value="Walking with stick"
                        id="Walking with stick"
                      />
                      <label htmlFor="Walking with stick">
                        Walking with stick
                      </label>
                    </div>
                    <div className="my-option">
                      <input
                        type="radio"
                        name="mode-of-arrival"
                        checked={modeOfArrival == "Walking with frame"}
                        onChange={handleModeOfArrivalChange}
                        value="Walking with frame"
                        id="Walking with frame"
                      />
                      <label htmlFor="Walking with frame">
                        Walking with frame
                      </label>
                    </div>
                    <div className="my-option">
                      <label htmlFor="">Other</label>
                      <input
                        className="form-control"
                        type="text"
                        name="mode-of-arrival"
                        onChange={handleModeOfArrivalChange}
                        value={modeOfArrival}
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    seta4FormShowing(false);
                    setOptionsModalShowing(false);
                  }}
                  className="btn btn-primary mt-5"
                >
                  Submit and Close
                </button>
              </>
            ) : null}
            {b4FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <div className="label">Please Specify Hospital Name</div>
                    <input
                      value={transferFromHosp}
                      onChange={(e) => setTransferFromHosp(e.target.value)}
                      type="text"
                      placeholder="Hospital Name"
                      className="mt-3 form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      setb4FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {c4FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <div className="label">
                      Please specify which department the patient was referred
                      from:
                    </div>
                    <input
                      value={referingDepartment}
                      onChange={(e) => setReferingDepartment(e.target.value)}
                      type="text"
                      placeholder="Department Name"
                      className="mt-3 form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      setc4FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {d4FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <div className="label">
                      Please specify the mode of arrival::
                    </div>
                    <input
                      onChange={(e) => setModeOfArrival(e.target.value)}
                      type="text"
                      placeholder="Mode of Arrival"
                      className="mt-3 form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      setd4FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {a6FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <input
                      max={maxDate}
                      min={minDate}
                      onChange={(e) =>
                        setLastMenstruationPeriod(e.target.value)
                      }
                      type="date"
                      placeholder="Last Menstruation Period:"
                      className="mt-3 form-control"
                    />
                    <div className="label">Last Menstruation Date</div>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={prevPregnancies}
                      onChange={(e) => {
                        setPrevPregnancies(e.target.value);
                      }}
                      placeholder="Number of previous pregnancy"
                      className="mt-3 form-control"
                    />
                    <div className="label">Number of previous pregnancy</div>
                    <input
                      type="number"
                      min="0"
                      max={prevPregnancies}
                      value={numberOfMisCarriages}
                      onChange={(e) => {
                        setNumberOfMisCarriages(e.target.value);
                      }}
                      placeholder="Number of previous miscarriage"
                      className="mt-3 form-control"
                    />
                    <div className="label">Number of previous miscarriages</div>
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      seta6FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {a8FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="label">Time of Onset</div>
                  <div className="options">
                    <input
                      onChange={(e) => setTimeOfOnset(e.target.value)}
                      type="time"
                      placeholder="Time From Onset"
                      className="mt-3 form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      seta8FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}

            {b8FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <div className="label mb-3">Specify Date of Onset</div>
                    <input
                      type="date"
                      max={maxDate}
                      min={minDate}
                      onChange={(e) => {
                        setDateFromOnset(e.target.value);
                      }}
                      className="form-control"
                    />
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      setb8FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {a10FormShowing === true ? (
              <>
                <div className="radio-input">
                  <div className="options">
                    <div className="label mb-3">Reason of current visit</div>
                    <textarea
                      name=""
                      style={{ resize: "none", width: "40rem" }}
                      className="form-control"
                      id=""
                      onChange={setReasonOfCurrentVisit}
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <button
                    className="btn btn-primary mt-4"
                    onClick={(e) => {
                      setOptionsModalShowing(false);
                      seta10FormShowing(false);
                    }}
                  >
                    Submit and Close
                  </button>
                </div>
              </>
            ) : null}
            {b10FormShowing === true ? (
              <>
                <div className="categories-form d-flex flex-row gap-4 justify-content-center">
                  <div className="q">
                    <h5 className="fw-bold">Airway/Breathing</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Difficulty in breathing"
                        id="Difficulty in breathing"
                      />
                      <label htmlFor="Difficulty in breathing">
                        Difficulty in breathing
                      </label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Difficulty of breathing on exertion"
                        id="Difficulty of breathing on exertion"
                      />
                      <label htmlFor="Difficulty of breathing on exertion">
                        Difficulty of breathing on exertion
                      </label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Productive cough"
                        id="Productive cough"
                      />
                      <label htmlFor="Productive cough">Productive cough</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Coughing up blood (Haemoptysis)"
                        id="Coughing up blood (Haemoptysis)"
                      />
                      <label htmlFor="Coughing up blood (Haemoptysis)">
                        Coughing up blood (Haemoptysis)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Dry cough"
                        id="Dry cough"
                      />
                      <label htmlFor="Dry cough">Dry cough</label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Low Saturation level"
                        id="Low Saturation level"
                      />
                      <label htmlFor="Low Saturation level">
                        Low Saturation level
                      </label>
                    </div>
                    <div className="option">
                      <input
                        type="checkbox"
                        onChange={handleCheckboxChange}
                        value="Other Breathing Problem"
                        id="Other Breathing Problem"
                      />
                      <label htmlFor="Other Breathing Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Chest/Circulation</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Chest Pain"
                        id="Chest Pain"
                      />
                      <label htmlFor="Chest Pain">Chest Pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Palpitation"
                        id="Palpitation"
                      />
                      <label htmlFor="Palpitation">Palpitation</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Chest Tightness"
                        id="Chest Tightness"
                      />
                      <label htmlFor="Chest Tightness">Chest Tightness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="High Blood Pressure"
                        id="High Blood Pressure"
                      />
                      <label htmlFor="High Blood Pressure">
                        High Blood Pressure
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Low Blood Pressure"
                        id="Low Blood Pressure"
                      />
                      <label htmlFor="Low Blood Pressure">
                        Low Blood Pressure
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Low Haemoglobin Level"
                        id="Low Haemoglobin Level"
                      />
                      <label htmlFor="Low Haemoglobin Level">
                        Low Haemoglobin Level
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="High Potassium Level"
                        id="High Potassium Level"
                      />
                      <label htmlFor="High Potassium Level">
                        High Potassium Level
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Circulation Problem"
                        id="Other Circulation Problem"
                      />
                      <label htmlFor="Other Circulation Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Abdomen/Gastrology</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Abdominal pain"
                        id="Abdominal pain"
                      />
                      <label htmlFor="Abdominal pain">Abdominal pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Vomiting"
                        id="Vomiting"
                      />
                      <label htmlFor="Vomiting">Vomiting</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Diarrhoea"
                        id="Diarrhoea"
                      />
                      <label htmlFor="Diarrhoea">Diarrhoea</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Blood in the stool"
                        id="Blood in the stool"
                      />
                      <label htmlFor="Blood in the stool">
                        Blood in the stool
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Vomiting of Blood (Hematemesis)"
                        id="Vomiting of Blood (Hematemesis)"
                      />
                      <label htmlFor="Vomiting of Blood (Hematemesis)">
                        Vomiting of Blood (Hematemesis)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Constipation"
                        id="Constipation"
                      />
                      <label htmlFor="Constipation">Constipation</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Abdominal Distension"
                        id="Abdominal Distension"
                      />
                      <label htmlFor="Abdominal Distension">
                        Abdominal Distension
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Abdominal Problem"
                        id="Other Abdominal Problem"
                      />
                      <label htmlFor="Other Abdominal Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Genitournary System</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Flank pain"
                        id="Flank pain"
                      />
                      <label htmlFor="Flank pain">Flank pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Blood in the Urine"
                        id="Blood in the Urine"
                      />
                      <label htmlFor="Blood in the Urine">
                        Blood in the Urine
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Urine Retention"
                        id="Urine Retention"
                      />
                      <label htmlFor="Urine Retention">Urine Retention</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Blocked Catheter"
                        id="Blocked Catheter"
                      />
                      <label htmlFor="Blocked Catheter">Blocked Catheter</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Painful Urination"
                        id="Painful Urination"
                      />
                      <label htmlFor="Painful Urination">
                        Painful Urination
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Testicular pain"
                        id="Testicular pain"
                      />
                      <label htmlFor="Testicular pain">Testicular pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Urination Problem"
                        id="Other Urination Problem"
                      />
                      <label htmlFor="Other Urination Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Nuerology</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Headache"
                        id="Headache"
                      />
                      <label htmlFor="Headache">Headache</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Numbness"
                        id="Numbness"
                      />
                      <label htmlFor="Numbness">Numbness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Slurred Speech"
                        id="Slurred Speech"
                      />
                      <label htmlFor="Slurred Speech">Slurred Speech</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Facial Drop"
                        id="Facial Drop"
                      />
                      <label htmlFor="Facial Drop">Facial Drop</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Limb Weakness"
                        id="Limb Weakness"
                      />
                      <label htmlFor="Limb Weakness">Limb Weakness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Seizure"
                        id="Seizure"
                      />
                      <label htmlFor="Seizure">Seizure</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Dizziness"
                        id="Dizziness"
                      />
                      <label htmlFor="Dizziness">Dizziness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Neck pain"
                        id="Neck pain"
                      />
                      <label htmlFor="Neck pain">Neck pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Nueral Problem"
                        id="Other Nueral Problem"
                      />
                      <label htmlFor="Other Nueral Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Skin</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Redness"
                        id="Redness"
                      />
                      <label htmlFor="Redness">Redness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Swelling"
                        id="Swelling"
                      />
                      <label htmlFor="Swelling">Swelling</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Lump"
                        id="Lump"
                      />
                      <label htmlFor="Lump">Lump</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Bruises"
                        id="Bruises"
                      />
                      <label htmlFor="Bruises">Bruises</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Rashes"
                        id="Rashes"
                      />
                      <label htmlFor="Rashes">Rashes</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Itchiness"
                        id="Itchiness"
                      />
                      <label htmlFor="Itchiness">Itchiness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Skin Problem"
                        id="Other Skin Problem"
                      />
                      <label htmlFor="Other Skin Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">ENT</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Ear Pain"
                        id="Ear Pain"
                      />
                      <label htmlFor="Ear Pain">Ear Pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Ear Discharge"
                        id="Ear Discharge"
                      />
                      <label htmlFor="Ear Discharge">Ear Discharge</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Ear Foreign Body"
                        id="Ear Foreign Body"
                      />
                      <label htmlFor="Ear Foreign Body">Ear Foreign Body</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Difficulty of Hearing"
                        id="Difficulty of Hearing"
                      />
                      <label htmlFor="Difficulty of Hearing">
                        Difficulty of Hearing
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Hearing Loss"
                        id="Hearing Loss"
                      />
                      <label htmlFor="Hearing Loss">Hearing Loss</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Epistaxis"
                        id="Epistaxis"
                      />
                      <label htmlFor="Epistaxis">Epistaxis</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Nasal Congestion"
                        id="Nasal Congestion"
                      />
                      <label htmlFor="Nasal Congestion">Nasal Congestion</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Nasal Injury"
                        id="Nasal Injury"
                      />
                      <label htmlFor="Nasal Injury">Nasal Injury</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Sore Throat"
                        id="Sore Throat"
                      />
                      <label htmlFor="Sore Throat">Sore Throat</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Ear Problem"
                        id="Other Ear Problem"
                      />
                      <label htmlFor="Other Ear Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Opthalmology</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Red Eye"
                        id="Red Eye"
                      />
                      <label htmlFor="Red Eye">Red Eye</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Periorbital Swelling"
                        id="Periorbital Swelling"
                      />
                      <label htmlFor="Periorbital Swelling">
                        Periorbital Swelling
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Corneal Abrasion (Right)"
                        id="Corneal Abrasion (Right)"
                      />
                      <label htmlFor="Corneal Abrasion (Right)">
                        Corneal Abrasion (Right)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Corneal Abrasion (Left)"
                        id="Corneal Abrasion (Left)"
                      />
                      <label htmlFor="Corneal Abrasion (Left)">
                        Corneal Abrasion (Left)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Eye Problem"
                        id="Other Eye Problem"
                      />
                      <label htmlFor="Other Eye Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Ob/Gyn</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Vaginal Bleeding during pregnancy"
                        id="Vaginal Bleeding during pregnancy"
                      />
                      <label htmlFor="Vaginal Bleeding during pregnancy">
                        Vaginal Bleeding during pregnancy
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Vaginal bleeding not related to pregnancy"
                        id="Vaginal bleeding not related to pregnancy"
                      />
                      <label htmlFor="Vaginal bleeding not related to pregnancy">
                        Vaginal bleeding not related to pregnancy
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Low Abdo Pain During Pregnancy"
                        id="Low Abdo Pain During Pregnancy"
                      />
                      <label htmlFor="Low Abdo Pain During Pregnancy">
                        Low Abdo Pain During Pregnancy
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Vaginal Pain"
                        id="Vaginal Pain"
                      />
                      <label htmlFor="Vaginal Pain">Vaginal Pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Amenorrhea"
                        id="Amenorrhea"
                      />
                      <label htmlFor="Amenorrhea">Amenorrhea</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Ob/Gyn Problem"
                        id="Other Ob/Gyn Problem"
                      />
                      <label htmlFor="Other Ob/Gyn Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Mental Health</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Suicidal Thoughts"
                        id="Suicidal Thoughts"
                      />
                      <label htmlFor="Suicidal Thoughts">
                        Suicidal Thoughts
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Depression"
                        id="Depression"
                      />
                      <label htmlFor="Depression">Depression</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Unusual Behaviour"
                        id="Unusual Behaviour"
                      />
                      <label htmlFor="Unusual Behaviour">
                        Unusual Behaviour
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Aggressive Behaviour"
                        id="Aggressive Behaviour"
                      />
                      <label htmlFor="Aggressive Behaviour">
                        Aggressive Behaviour
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Drug Misuse"
                        id="Drug Misuse"
                      />
                      <label htmlFor="Drug Misuse">Drug Misuse</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Alcohol Intoxication"
                        id="Alcohol Intoxication"
                      />
                      <label htmlFor="Alcohol Intoxication">
                        Alcohol Intoxication
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Hallucination"
                        id="Hallucination"
                      />
                      <label htmlFor="Hallucination">Hallucination</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Mental Health Problem"
                        id="Other Mental Health Problem"
                      />
                      <label htmlFor="Other Mental Health Problem">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Trauman/Injuries/Foreign Bodies</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Laceration Wound"
                        id="Laceration Wound"
                      />
                      <label htmlFor="Laceration Wound">Laceration Wound</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Injuries"
                        id="Injuries"
                      />
                      <label htmlFor="Injuries">Injuries</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Animal Bites / Sting"
                        id="Animal Bites / Sting"
                      />
                      <label htmlFor="Animal Bites / Sting">
                        Animal Bites / Sting
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Gunshot"
                        id="Gunshot"
                      />
                      <label htmlFor="Gunshot">Gunshot</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Stab Wound"
                        id="Stab Wound"
                      />
                      <label htmlFor="Stab Wound">Stab Wound</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Foreign Body"
                        id="Foreign Body"
                      />
                      <label htmlFor="Foreign Body">Foreign Body</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Needle-stick injury"
                        id="Needle-stick injury"
                      />
                      <label htmlFor="Needle-stick injury">
                        Needle-stick injury
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Major Trauma"
                        id="Major Trauma"
                      />
                      <label htmlFor="Major Trauma">Major Trauma</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Multiple Injuries"
                        id="Multiple Injuries"
                      />
                      <label htmlFor="Multiple Injuries">
                        Multiple Injuries
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Injuries"
                        id="Other Injuries"
                      />
                      <label htmlFor="Other Injuries">Other</label>
                    </div>
                  </div>
                  <div className="q">
                    <h5 className="fw-bold">Unwell/Other</h5>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Feeling Unwell"
                        id="Feeling Unwell"
                      />
                      <label htmlFor="Feeling Unwell">Feeling Unwell</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Fall"
                        id="Fall"
                      />
                      <label htmlFor="Fall">Fall</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Fever"
                        id="Fever"
                      />
                      <label htmlFor="Fever">Fever</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Overdose and poisoning"
                        id="Overdose and poisoning"
                      />
                      <label htmlFor="Overdose and poisoning">
                        Overdose and poisoning
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Allergic Reaction"
                        id="Allergic Reaction"
                      />
                      <label htmlFor="Allergic Reaction">
                        Allergic Reaction
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Expected By"
                        id="Expected By"
                      />
                      <label htmlFor="Expected By">Expected By</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Unprotected Sex"
                        id="Unprotected Sex"
                      />
                      <label htmlFor="Unprotected Sex">Unprotected Sex</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Sexually acquired infection"
                        id="v"
                      />
                      <label htmlFor="Sexually acquired infection">
                        Sexually acquired infection
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Asking for Prescription"
                        id="Asking for Prescription"
                      />
                      <label htmlFor="Asking for Prescription">
                        Asking for Prescription
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleCheckboxChange}
                        type="checkbox"
                        value="Other Injuries"
                        id="Other Injuries"
                      />
                      <label htmlFor="Other">Other</label>
                    </div>
                  </div>
                  <div className="w-100 py-5 d-flex align-items-center justify-content-center">
                    <button
                      onClick={(e) => {
                        setOptionsModalShowing(false);
                        setb10FormShowing(false);
                      }}
                      className="my-primary-btn"
                    >
                      Submit and Close
                    </button>
                  </div>
                </div>
              </>
            ) : null}
            {form17Showing === true ? (
              <>
                <div className="categories-form d-flex flex-row gap-4 justify-content-center">
                  <h5 className="section__title w-100 text-center">
                    PLEASE SLECT ALL AVAILABLE
                  </h5>
                  <div className="q">
                    <div
                      className="q-statement fw-bold"
                      style={{ color: "white" }}
                    >
                      Behavioural state:
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Agitated"
                        id="Agitated"
                      />
                      <label htmlFor="Agitated">Agitated</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Confused"
                        id="Confused"
                      />
                      <label htmlFor="Confused">Confused</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Unresponsive"
                        id="Unresponsive"
                      />
                      <label htmlFor="Unresponsive">Unresponsive</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Aggressive"
                        id="Aggressive"
                      />
                      <label htmlFor="Aggressive">Aggressive</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Lethargic"
                        id="Lethargic"
                      />
                      <label htmlFor="Lethargic">Lethargic</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="Drowsy"
                        id="Drowsy"
                      />
                      <label htmlFor="Drowsy">Drowsy</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleForm17CheckboxChange}
                        type="checkbox"
                        value="sleepy appearance"
                        id="sleepy appearance"
                      />
                      <label htmlFor="sleepy appearance">
                        sleepy appearance
                      </label>
                    </div>
                  </div>
                  <div className="q">
                    <div
                      className="q-statement fw-bold"
                      style={{ color: "white" }}
                    >
                      Clothing and paraphernalia:
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="Hospital Gown"
                        id="Hospital Gown"
                      />
                      <label htmlFor="Hospital Gown">Hospital Gown</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="Wet clothing"
                        id="Wet clothing"
                      />
                      <label htmlFor="Wet clothing">Wet clothing</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="Unkempt"
                        id="Unkempt"
                      />
                      <label htmlFor="Unkempt">Unkempt</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="No clothes"
                        id="No clothes"
                      />
                      <label htmlFor="No clothes">No clothes</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="Inappropriate heavy"
                        id="Inappropriate heavy"
                      />
                      <label htmlFor="Inappropriate heavy">
                        Inappropriate heavy
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="clothing"
                        id="clothing"
                      />
                      <label htmlFor="clothing">clothing</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleClothingCheckboxChange}
                        type="checkbox"
                        value="Other Clothing"
                        id="Other Clothing"
                      />
                      <label htmlFor="Other Clothing">Other Clothing</label>
                    </div>
                  </div>
                  <div className="q">
                    <div
                      className="q-statement fw-bold"
                      style={{ color: "white" }}
                    >
                      Facies and expression:
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="In Pain"
                        id="In Pain"
                      />
                      <label htmlFor="In Pain">In Pain</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Facial redness"
                        id="Facial redness"
                      />
                      <label htmlFor="Facial redness">Facial redness</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Facial drop"
                        id="Facial drop"
                      />
                      <label htmlFor="Facial drop">Facial drop</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="dry skin"
                        id="dry skin"
                      />
                      <label htmlFor="dry skin">dry skin</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Facial swelling"
                        id="Facial swelling"
                      />
                      <label htmlFor="Facial swelling">Facial swelling</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="loss of lateral Eyebrows"
                        id="loss of lateral Eyebrows"
                      />
                      <label htmlFor="loss of lateral Eyebrows">
                        loss of lateral Eyebrows
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Pale"
                        id="Pale"
                      />
                      <label htmlFor="Pale">Pale</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Periorbital edema"
                        id="Periorbital edema"
                      />
                      <label htmlFor="Periorbital edema">
                        Periorbital edema
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleFaciesAndExpressionsCheckboxChange}
                        type="checkbox"
                        value="Sweating"
                        id="Sweating"
                      />
                      <label htmlFor="Sweating">Sweating</label>
                    </div>
                  </div>
                  <div className="q">
                    <div
                      className="q-statement fw-bold"
                      style={{ color: "white" }}
                    >
                      Posture and decubitus:
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Normal Posture"
                        id="Normal Posture"
                      />
                      <label htmlFor="Normal Posture">Normal Posture</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Arm rigidity"
                        id="Arm rigidity"
                      />
                      <label htmlFor="Arm rigidity">Arm rigidity</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Legs rigidity"
                        id="Legs rigidity"
                      />
                      <label htmlFor="Legs rigidity">Legs rigidity</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Hemiplegic posture"
                        id="Hemiplegic posture"
                      />
                      <label htmlFor="Hemiplegic posture">
                        Hemiplegic posture
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="flexor hypertonia"
                        id="flexor hypertonia"
                      />
                      <label htmlFor="flexor hypertonia">
                        flexor hypertonia
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Cerebellar posture"
                        id="Cerebellar posture"
                      />
                      <label htmlFor="Cerebellar posture">
                        Cerebellar posture
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Opisthotonos of meningitis"
                        id="Opisthotonos of meningitis"
                      />
                      <label htmlFor="Opisthotonos of meningitis">
                        Opisthotonos of meningitis
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Flailing in bed (Due to pain)"
                        id="Flailing in bed (Due to pain)"
                      />
                      <label htmlFor="Flailing in bed (Due to pain)">
                        Flailing in bed (Due to pain)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Tonic distortions"
                        id="Tonic distortions"
                      />
                      <label htmlFor="Tonic distortions">
                        Tonic distortions
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handlePostureAndDecubitusCheckboxChange}
                        type="checkbox"
                        value="Leg shortening"
                        id="Leg shortening"
                      />
                      <label htmlFor="Leg shortening">Leg shortening</label>
                    </div>
                  </div>
                  <div className="q">
                    <div
                      className="q-statement fw-bold"
                      style={{ color: "white" }}
                    >
                      Odor of breath and body:
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Alcohol smell"
                        id="Alcohol smell"
                      />
                      <label htmlFor="Alcohol smell">Alcohol smell</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Cannabis smell"
                        id="Cannabis smell"
                      />
                      <label htmlFor="Cannabis smell">Cannabis smell</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Fruity-smelling breath (?? Ketoacidosis)"
                        id="Fruity-smelling breath (?? Ketoacidosis)"
                      />
                      <label htmlFor="Fruity-smelling breath (?? Ketoacidosis)">
                        Fruity-smelling breath (?? Ketoacidosis)
                      </label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Faecal odor"
                        id="Faecal odor"
                      />
                      <label htmlFor="Faecal odor">Faecal odor</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Urine odor"
                        id="Urine odor"
                      />
                      <label htmlFor="Urine odor">Urine odor</label>
                    </div>
                    <div className="option">
                      <input
                        onChange={handleOdorOfBreathAndBodyCheckboxChange}
                        type="checkbox"
                        value="Odor of uremia"
                        id="Odor of uremia"
                      />
                      <label htmlFor="Odor of uremia">Odor of uremia</label>
                    </div>
                  </div>
                  <div className="w-100">
                    <button
                      onClick={(e) => {
                        setForm17Showing(false);
                        setOptionsModalShowing(false);
                      }}
                      className="my-primary-btn"
                    >
                      Submit and Close
                    </button>
                  </div>
                </div>
              </>
            ) : null}
            {datixNumberFormShowing === true ? (
              <>
                <div className="d-flex flex-column align-items-center gap-3">
                  <div className="fw-bold">
                    Please Enter datix reference number below:
                  </div>
                  <input
                    type="text"
                    value={datixNumber}
                    onChange={(e) => setDatixNumber(e.target.value)}
                    className="form-control"
                  />
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setDatixNumberFormShowing(false);
                      setOptionsModalShowing(false);
                    }}
                    className="my-primary-btn"
                  >
                    Submit and Close
                  </a>
                </div>
              </>
            ) : null}
            {addPainsFormShowing === true ? (
              <>
                <form
                  onSubmit={handleAddPains}
                  className="d-flex flex-column gap-1"
                >
                  <div className="input">
                    <input
                      type="text"
                      name="pain_name"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Where is the Pain located?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      onChange={(e) => setPainCon(e.target.value)}
                      name="pain_con"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      What makes the Pain worse or better?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      onChange={(e) => setPainType(e.target.value)}
                      type="text"
                      name="pain_type"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      What type of Pain is it? Is it Dull, Burning or other?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      onChange={(e) => setPainSpread(e.target.value)}
                      type="text"
                      name="pain_spread"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Does the Pain Radiate to other areas?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      onChange={(e) => setPainSevereness(e.target.value)}
                      type="text"
                      name="pain_severe"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      How severe is the pain on a scale of 0 - 10?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      onChange={(e) => setPainTime(e.target.value)}
                      name="pain_time"
                      className="form-control"
                    />
                    <label className="fw-bold"> When did the Pain start?</label>
                  </div>
                  <div className="d-flex btns gap-3 mt-3 flex-row">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOptionsModalShowing(false);
                        setAddPainsFormShowing(false);
                      }}
                      className="btn btn-secondary"
                    >
                      CANCEL
                    </button>
                    <button type="submit" className="my-primary-btn">
                      save
                    </button>
                  </div>
                </form>
              </>
            ) : null}
            {addLinesFormShowing === true ? (
              <>
                <form
                  onSubmit={handleAddLines}
                  className="d-flex flex-column gap-1"
                >
                  <div className="input">
                    <input
                      type="text"
                      name="line_name"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Lines / Cathether (e.g: Uritheral Catheter)
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="line_size"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Size (in numbers with Unit)?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="line_site"
                      className="form-control"
                    />
                    <label className="fw-bold">Insertion Site</label>
                  </div>
                  <div className="input">
                    <select name="line_patency" id="" className="form-control">
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                    <label className="fw-bold">Patency</label>
                  </div>
                  <div className="input">
                    <input
                      type="date"
                      name="line_date"
                      className="form-control"
                    />
                    <label className="fw-bold">Insertion Date</label>
                  </div>
                  <div className="d-flex btns gap-3 mt-3 flex-row">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOptionsModalShowing(false);
                        setAddLinesFormShowing(false);
                      }}
                      className="btn btn-secondary"
                    >
                      CANCEL
                    </button>
                    <button type="submit" className="my-primary-btn">
                      save
                    </button>
                  </div>
                </form>
              </>
            ) : null}
            {addSoresFormShowing === true ? (
              <>
                <form
                  onSubmit={handleAddSores}
                  className="d-flex flex-column gap-1"
                >
                  <div className="input">
                    <input
                      type="text"
                      name="sore_name"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Name of affected body area
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="sore_size"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Size (in numbers with Unit)?
                    </label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="sore_site"
                      className="form-control"
                    />
                    <label className="fw-bold">Insertion Site</label>
                  </div>
                  <div className="input">
                    <select name="sore_grade" id="" className="form-control">
                      <option value="Healed Pressure Sore">
                        Healed Pressure Sore
                      </option>
                      <option value="Stage 1: Nonblanchable erythma">
                        Stage 1: Nonblanchable erythma
                      </option>
                      <option value="Stage 2: Partial Thickness Skin Loss">
                        Stage 2: Partial Thickness Skin Loss
                      </option>
                      <option value="Stage 3: Full Thickness Skin Loss">
                        Stage 3: Full Thickness Skin Loss
                      </option>
                      <option value="Depth Unknown">Depth Unknown</option>
                    </select>
                    <label className="fw-bold">Grade of pressure sore</label>
                  </div>
                  <div className="input">
                    <input
                      type="text"
                      name="sore_desc"
                      className="form-control"
                    />
                    <label className="fw-bold">
                      Further Description of Sore
                    </label>
                  </div>
                  <div className="d-flex btns gap-3 mt-3 flex-row">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOptionsModalShowing(false);
                        setAddSoresFormShowing(false);
                      }}
                      className="btn btn-secondary"
                    >
                      CANCEL
                    </button>
                    <button type="submit" className="my-primary-btn">
                      save
                    </button>
                  </div>
                </form>
              </>
            ) : null}
            {addMentalMedicationFormShowing === true ? (
              <>
                <form
                  onSubmit={handleAddMentalMedications}
                  className="d-flex flex-column gap-1"
                >
                  <div className="input">
                    <input
                      type="text"
                      name="med_name"
                      className="form-control"
                    />
                    <label className="fw-bold">Medication</label>
                  </div>
                  <div className="input">
                    <input type="text" name="dose" className="form-control" />
                    <label className="fw-bold">Dose</label>
                  </div>
                  <div className="input">
                    <input type="time" name="time" className="form-control" />
                    <label className="fw-bold">Time</label>
                  </div>
                  <div className="d-flex btns gap-3 mt-3 flex-row">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOptionsModalShowing(false);
                        setAddMentalMedicationFormShowing(false);
                      }}
                      className="btn btn-secondary"
                    >
                      CANCEL
                    </button>
                    <button type="submit" className="my-primary-btn">
                      save
                    </button>
                  </div>
                </form>
              </>
            ) : null}
            {addPriorToComingMedicationsFormShowing === true ? (
              <>
                <form
                  onSubmit={handleAddPriorToComingMedications}
                  className="d-flex flex-column gap-1"
                >
                  <div className="input">
                    <input
                      type="text"
                      name="med_name"
                      className="form-control"
                    />
                    <label className="fw-bold">Medication</label>
                  </div>
                  <div className="input">
                    <input type="text" name="dose" className="form-control" />
                    <label className="fw-bold">Dose</label>
                  </div>
                  <div className="input">
                    <input type="time" name="time" className="form-control" />
                    <label className="fw-bold">Time</label>
                  </div>
                  <div className="d-flex btns gap-3 mt-3 flex-row">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setOptionsModalShowing(false);
                        setAddPriorToComingMedicationsFormShowing(false);
                      }}
                      className="btn btn-secondary"
                    >
                      CANCEL
                    </button>
                    <button type="submit" className="my-primary-btn">
                      save
                    </button>
                  </div>
                </form>
              </>
            ) : null}
          </div>
        </div>
      ) : null}

      <div className="form-1 w-100">
        <h2 className="section__title">Situation</h2>
        <div className="section  d-flex flex-row w-100 flex-wrap mt-4 gap-4 section-1">
          <div className="radio-input">
            <div className="options">
              <div className="my-option">
                <input
                  type="radio"
                  name="sex"
                  checked={sex == "male"}
                  onChange={handleSexChange}
                  value="male"
                  id="male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="sex"
                  checked={sex == "female"}
                  onChange={handleSexChange}
                  value="female"
                  id="female"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="sex"
                  checked={sex == "skip"}
                  onChange={handleSexChange}
                  value="skip"
                  id="skip"
                />
                <label htmlFor="skip">Skip</label>
              </div>
            </div>
            <div class="dropdown-menu" aria-labelledby="triggerId"></div>
          </div>
          <div className="radio-input">
            <div className="label mb-3"></div>
            <div className="options">
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  seta4FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={modeOfArrival == "self-presented"}
                  onChange={handleModeOfArrivalChange}
                  value="self-presented"
                  id="self-presented"
                />
                <label htmlFor="self-presented">Self-Presented</label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={
                    modeOfArrival == "Brought in by ambulance (Not transfer)"
                  }
                  onChange={handleModeOfArrivalChange}
                  value="Brought in by ambulance (Not transfer)"
                  id="Brought in by ambulance (Not transfer)"
                />
                <label htmlFor="Brought in by ambulance (Not transfer)">
                  Brought in by ambulance (Not transfer)
                </label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={
                    modeOfArrival ==
                    "Transferred from other Hospital via ambulance"
                  }
                  onClick={(e) => {
                    setOptionsModalShowing(true);
                    setb4FormShowing(true);
                  }}
                  onChange={handleModeOfArrivalChange}
                  value="Transferred from other Hospital via ambulance"
                  id="Transferred from other Hospital via ambulance"
                />
                <label htmlFor="Transferred from other Hospital via ambulance">
                  Transferred from other Hospital via ambulance
                </label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={modeOfArrival == "Referred from other Hospital"}
                  onChange={handleModeOfArrivalChange}
                  value="Referred from other Hospital"
                  id="Referred from other Hospital"
                  onClick={(e) => {
                    setb4FormShowing(true);
                    setOptionsModalShowing(true);
                  }}
                />
                <label htmlFor="Referred from other Hospital">
                  Referred from other Hospital
                </label>
              </div>
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setc4FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={
                    modeOfArrival == "Referred from Different department"
                  }
                  onChange={handleModeOfArrivalChange}
                  value="Referred from Different department"
                  id="Referred from Different department"
                />
                <label htmlFor="Referred from Different department">
                  Referred from Different department
                </label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={modeOfArrival == "Brought in by police"}
                  onChange={handleModeOfArrivalChange}
                  value="Brought in by police"
                  id="Brought in by police"
                />
                <label htmlFor="Brought in by police">
                  Brought in by police
                </label>
              </div>
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setd4FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="mode-of-arrival"
                  checked={modeOfArrival == "Other-arrival"}
                  onChange={handleModeOfArrivalChange}
                  value="Other-arrival"
                  id="Other-arrival"
                />
                <label htmlFor="Other-arrival">Other</label>
              </div>
            </div>
          </div>
          <div className="range-input mx-5">
            <div className="label">Age</div>
            <div className="range-input-area d-flex flex-column align-items-center">
              <input
                style={{ width: "20rem" }}
                className="mt-5"
                min="14"
                max="120"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="range"
                name="age"
                id=""
              />
              <div className="value  d-flex align-items-center justify-content-around">
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="text"
                  style={{ width: "50px" }}
                  className=""
                />
                <div className="value mb-4 mx-1">Years</div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="section__title">Background</h2>

        <div className="section  d-flex flex-row w-100 flex-wrap mt-4 gap-4 section-1">
          {sex == "female" ? (
            <>
              <div className="radio-input">
                <h4>Pregnancy Status</h4>
                <div className="options">
                  <div
                    onClick={(e) => {
                      setOptionsModalShowing(true);
                      seta6FormShowing(true);
                    }}
                    className="my-option"
                  >
                    <input
                      type="radio"
                      name="pregnency_status"
                      checked={pregnencyStatus == "Currently Pregnant"}
                      onChange={handlePregnencyStatus}
                      value="Currently Pregnant"
                      id="Currently Pregnant"
                    />
                    <label htmlFor="Currently Pregnant">
                      Currently Pregnant
                    </label>
                  </div>
                  <div
                    onClick={(e) => {
                      setOptionsModalShowing(true);
                      seta6FormShowing(true);
                    }}
                    className="my-option"
                  >
                    <input
                      type="radio"
                      name="pregnency_status"
                      checked={pregnencyStatus == "Unknown Pregnancy Status"}
                      onChange={handlePregnencyStatus}
                      value="Unknown Pregnancy Status"
                      id="Unknown Pregnancy Status"
                    />
                    <label htmlFor="Unknown Pregnancy Status">
                      Unknown Pregnancy Status
                    </label>
                  </div>
                  <div className="my-option">
                    <input
                      type="radio"
                      name="pregnency_status"
                      checked={pregnencyStatus == "Not Pregnant"}
                      onChange={handlePregnencyStatus}
                      value="Not Pregnant"
                      id="Not Pregnant"
                    />
                    <label htmlFor="Not Pregnant">Not Pregnant</label>
                  </div>
                </div>
              </div>
            </>
          ) : null}

          <div className="radio-input">
            <h4>When the symptoms started</h4>
            <div className="options">
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  seta8FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="symptoms_start_time"
                  value="Within the last 24 hours"
                  id="Within the last 24 hours"
                />
                <label htmlFor="Within the last 24 hours">
                  Within the last 24 hours
                </label>
              </div>
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setb8FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="symptoms_start_time"
                  value="More than 24 hours"
                  id="More than 24 hours"
                />
                <label htmlFor="More than 24 hours">More than 24 hours</label>
              </div>
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setb8FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  name="symptoms_start_time"
                  value="other-onset"
                  id="other-onset"
                />
                <label htmlFor="other-onset">Other of symptom onset</label>
              </div>
            </div>
          </div>

          <div className="radio-input">
            <h4>What is the purpose of your current visit?</h4>
            <div className="fw-bold mx-3">
              Please choose the method you prefer
            </div>
            <div className="options">
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  seta10FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  checked={preferedMethod == "Free Text"}
                  onChange={(e) => {
                    setPreferedMethod(e.target.value);
                  }}
                  name="prefered_method"
                  value="Free Text"
                  id="Free Text"
                />
                <label htmlFor="Free Text">Free Text</label>
              </div>
              <div className="my-option">
                <input
                  type="radio"
                  checked={preferedMethod == "Record Audio"}
                  onChange={(e) => {
                    setPreferedMethod(e.target.value);
                  }}
                  name="prefered_method"
                  value="Record Audio"
                  id="Record Audio"
                />
                <label htmlFor="Record Audio">Record Audio</label>
              </div>
              <div
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setb10FormShowing(true);
                }}
                className="my-option"
              >
                <input
                  type="radio"
                  checked={preferedMethod == "Selecting From the List"}
                  onChange={(e) => {
                    setPreferedMethod(e.target.value);
                  }}
                  name="Selecting From the List"
                  value="Selecting From the List"
                  id="Selecting From the List"
                />
                <label htmlFor="Selecting From the List">
                  Selecting From the List
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="section past-medical-history">
          <h2 className="section__title">Past Medical History</h2>
          <div className="values">
            {pastMedicalHistorySelectedOptions.map((opt, index) => (
              <div key={index} className="value border-1 border border-info">
                {opt}
                <span className="close" onClick={() => handleRemoveOption(opt)}>
                  x
                </span>
              </div>
            ))}
          </div>
          <input
            placeholder="Start Typing..."
            type="text"
            className="form-control w-50"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <div className="available-options p-4 d-flex gap-3 flex-wrap flex-row mt-3 w-50">
            {matchedPastMedicalHistoryOptions.map((opt, index) => (
              <div
                key={index}
                className="matched-option"
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        </div>
        <div className="section assesment-section">
          <h2 className="section__title">Assessment</h2>
          <h5
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "4rem",
            }}
            className=""
          >
            First Impression
          </h5>
          <div className="label mb-5 fw-bold">
            <h4 className="text text-danger">
              Please ensure personal safety. (Wear apron and gloves as
              appropriate).
            </h4>
          </div>
          <div id="division-14">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className=""
            >
              Patient Appearance
            </h5>
            <div className="fw-bold mt-3 mb-3">1). Is the patient awake?</div>
            <ul>
              <li className="mb-3 mt-3">
                <a
                  onClick={(e) => setPatientAwake(true)}
                  href="#division-16"
                  className="my-primary-btn "
                >
                  Patient is awake <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </li>
              <li>
                <a
                  href="#15-b"
                  onClick={(e) => {
                    e.preventDefault();
                    setPatientAwake("sleeping");
                  }}
                  className="my-primary-btn"
                >
                  patient appears sleeping or unconscious or has collapsed{" "}
                  <FontAwesomeIcon icon={faArrowDown} />
                </a>
              </li>
            </ul>
            {patientAwake ? (
              <div id="15-b">
                <div className="fw-bold mt-5 mb-3">
                  2). Is the patient arousable (awaken) by voice or shaking
                  stimulation?
                  <ul>
                    <li className="mb-3 mt-3">
                      <a
                        onClick={(e) => setPatientisArousableByVoice(true)}
                        href="#division-16"
                        className="my-primary-btn "
                      >
                        Yes <FontAwesomeIcon icon={faArrowDown} />
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={(e) => setPatientisArousableByVoice(false)}
                        href="#15-c"
                        className="my-primary-btn"
                      >
                        No <FontAwesomeIcon icon={faArrowDown} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
            {patientAwake ? (
              <div id="15-c">
                <div className="fw-bold mt-5 mb-3">
                  Is the patient breathing?
                </div>
                <ul>
                  <li>
                    <div className="fw-bold" style={{ color: "red" }}>
                      ‘’PLEASE seek appropriate help and start Basic Life
                      Support Protocol’’
                    </div>
                  </li>
                  <li>
                    <img
                      src={BLSImage}
                      className="mb-3"
                      style={{ width: "30rem", marginTop: "1rem" }}
                      alt=""
                    />
                  </li>
                  <li className="mb-3">
                    <a href="#" className="fw-bold " style={{ color: "blue" }}>
                      Or click here for ACLS Algorythm
                    </a>
                  </li>
                  <li className="mb-3">
                    <h4 className="fw-bold text-green">
                      Go to ACLS Form when help arrive if applicable
                    </h4>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div id="division-16" className="mt-5">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              First Impression
            </h5>
            <ul>
              <li className="mb-3">
                <a
                  onClick={(e) => setPatientAppearnaceNormal("1")}
                  className=""
                  href="#division-18"
                >
                  <div className="option">
                    <input
                      checked={patientAppearnaceNormal == "1"}
                      type="radio"
                      name=""
                      id=""
                    />
                    <label htmlFor="">Normal Appearance</label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setPatientAppearnaceNormal("2");
                    setOptionsModalShowing(true);
                    setForm17Showing(true);
                  }}
                  className=""
                  href="#division-20"
                >
                  <div className="option">
                    <input
                      checked={patientAppearnaceNormal == "2"}
                      type="radio"
                      name=""
                      id=""
                    />
                    <label htmlFor="">Abnormal Appearance</label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div id="division-18">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Allergy
            </h5>
            <div className="fw-bold mt-5 mb-3">
              Q). Does the patient have any known allergy?
            </div>
            <ul>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setPatientHasAllergy(true);
                  }}
                  className=""
                  href="#division-18-a"
                >
                  <div className="option">
                    <input
                      checked={patientHasAllergy == true}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setPatientHasAllergy(false);
                  }}
                  className=""
                  href="#division-20"
                >
                  <div className="option">
                    <input
                      checked={patientHasAllergy == false}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">No</label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setPatientHasAllergy("false");
                  }}
                  className=""
                  href="#division-20"
                >
                  <div className="option">
                    <input
                      checked={patientHasAllergy === "false"}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">Unable to obtain</label>
                  </div>
                </a>
              </li>
            </ul>
            {patientHasAllergy == true ? (
              <>
                <div id="division-18-a" className="fw-bold mt-5 mb-3">
                  Please Specify what allergy the patient have:
                </div>
                <input
                  placeholder="Start Typing..."
                  type="text"
                  className="form-control w-50"
                  value={medicationSearchInput}
                  onChange={handleMedicationsSearchInputChange}
                />
                <div className="values">
                  {medicationsSelectedOptions.map((opt, index) => (
                    <div
                      key={index}
                      className="value border-1 border border-info"
                    >
                      {opt}
                      <span
                        className="close"
                        onClick={() => handleMedicationsRemoveOption(opt)}
                      >
                        x
                      </span>
                    </div>
                  ))}
                </div>
                <div className="available-options p-4 d-flex gap-3 flex-wrap flex-row mt-3 w-50">
                  {matchedMedicationsOptions.map((opt, index) => (
                    <div
                      key={index}
                      className="matched-option"
                      onClick={() => handleMedicationOptionClick(opt)}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>
          <div id="division-20">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Airway Assessment
            </h5>
            <div className="fw-bold mb-4 tip">
              “LOOK for chest and abdominal movements. LISTEN and FEEL for
              airflow at the mouth and nose. “
            </div>
            <ul>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setAirwayAssessmentRequired("patent");
                  }}
                  className=""
                  href="#division-24"
                >
                  <div className="option">
                    <input
                      checked={airwayAssessmentRequired == "patent"}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">Patent</label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setAirwayAssessmentRequired("partial airway");
                  }}
                  className=""
                  href="#division-21"
                >
                  <div className="option">
                    <input
                      checked={airwayAssessmentRequired == "partial airway"}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">
                      Partial airway obstruction (air entry is diminished and
                      usually noisy){" "}
                    </label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a
                  onClick={(e) => {
                    setAirwayAssessmentRequired("Complete Airway");
                  }}
                  className=""
                  href="#division-22"
                >
                  <div className="option">
                    <input
                      checked={airwayAssessmentRequired == "Complete Airway"}
                      type="radio"
                      id=""
                    />
                    <label htmlFor="">Complete Airway obstruction</label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {airwayAssessmentRequired == "partial airway" ? (
            <>
              <div id="division-21">
                <h5
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4rem",
                  }}
                  className="mb-4"
                >
                  Partial Airway Obstruction
                </h5>
                <img
                  style={{ width: "40rem" }}
                  src={partialAirwayObsImage}
                  alt=""
                  className="mt-4 mb-3"
                />
                <div style={{ fontSize: "23px" }} className="fw-bold">
                  Please read what your finding can indicate:
                </div>
                <ul style={{ listStyle: "inside" }}>
                  <li className="fw-bold">
                    Inspiratory stridor (caused by obstruction at the laryngeal
                    level or above.)
                  </li>
                  <li className="fw-bold">
                    Expiratory wheeze (suggests obstruction of the lower
                    airways, which tend to collapse and obstruct during
                    expiration. )
                  </li>
                  <li className="fw-bold">
                    Gurgling (suggests the presence of liquid or semisolid
                    foreign material in the upper airways)
                  </li>
                  <li className="fw-bold">
                    Snoring (arises when the pharynx is partially occluded by
                    the tongue or palate.)
                  </li>
                  <li className="fw-bold">
                    Crowingor stridor-(the sound of laryngeal spasm or
                    obstruction.)
                  </li>
                  <li className="fw-bold">
                    <a href="https://lms.resus.org.uk/modules/m65-non-technical-skills/resources/chapter_7.pdf">
                      for more recommendation please follow the ALS Link.{" "}
                    </a>
                  </li>
                  <li className="mt-4 mb-3">
                    <a className="my-primary-btn" href="#division-20">
                      Back
                    </a>
                  </li>
                  <li className="">
                    Is the airway clear now?{" "}
                    <a href="#division-23" className="my-primary-btn">
                      Yes
                    </a>{" "}
                    <a href="#division-21" className="my-primary-btn">
                      No
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : null}
          {airwayAssessmentRequired == "Complete Airway" ? (
            <>
              <div className="mt-4" id="division-22">
                <h5
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4rem",
                  }}
                  className="mb-4"
                >
                  Complete airway obstruction:
                </h5>
                <img
                  style={{ width: "40rem" }}
                  src={completeAirwayObsImage}
                  alt=""
                  className="mt-4 mb-3"
                />
              </div>
              <div className="mt-4" id="division-23">
                <h5
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4rem",
                  }}
                  className="mb-4"
                >
                  What is the intervention performed?
                </h5>
                <div className="checkboxes d-flex flex-column gap-1">
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Suction"
                      id="Suction"
                    />
                    <label className="fw-bold" htmlFor="Suction">
                      Suction
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleInterventionsCheckboxChange}
                      type="checkbox"
                      value="Head tilt and chin lift"
                      id="Head tilt and chin lift"
                    />
                    <label
                      className="fw-bold"
                      htmlFor="Head tilt and chin lift"
                    >
                      Head tilt and chin lift
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input type="checkbox" value="Jaw thrust" id="Jaw thrust" />
                    <label className="fw-bold" htmlFor="Jaw thrust">
                      Jaw thrust
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleInterventionsCheckboxChange}
                      type="checkbox"
                      value="Oropharyngeal airway"
                      id="Oropharyngeal airway"
                    />
                    <label className="fw-bold" htmlFor="Oropharyngeal airway">
                      Oropharyngeal airway
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Nasopharyngeal airway"
                      id="Nasopharyngeal airway"
                    />
                    <label className="fw-bold" htmlFor="Nasopharyngeal airway">
                      Nasopharyngeal airway
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Oxygen administration"
                      id="Oxygen administration"
                    />
                    <label className="fw-bold" htmlFor="Oxygen administration">
                      Oxygen administration
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="bag-mask ventilation"
                      id="bag-mask ventilation"
                    />
                    <label className="fw-bold" htmlFor="bag-mask ventilation">
                      bag-mask ventilation
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Laryngeal mask airway LMA"
                      id="Laryngeal mask airway LMA"
                    />
                    <label
                      className="fw-bold"
                      htmlFor="Laryngeal mask airway LMA"
                    >
                      Laryngeal mask airway LMA
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleInterventionsCheckboxChange}
                      type="checkbox"
                      value="The ProSeal LMA"
                      id="The ProSeal LMA"
                    />
                    <label className="fw-bold" htmlFor="The ProSeal LMA">
                      The ProSeal LMA
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Laryngeal tube"
                      id="Laryngeal tube"
                    />
                    <label className="fw-bold" htmlFor="Laryngeal tube">
                      Laryngeal tube
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="i-gel"
                      id="i-gel"
                    />
                    <label className="fw-bold" htmlFor="i-gel">
                      i-gel
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      type="checkbox"
                      onChange={handleInterventionsCheckboxChange}
                      value="Tracheal intubation"
                      id="Tracheal intubation"
                    />
                    <label className="fw-bold" htmlFor="Tracheal intubation">
                      Tracheal intubation
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleInterventionsCheckboxChange}
                      type="checkbox"
                      value="Other Intervention"
                      id="Other Intervention"
                    />
                    <label className="fw-bold" htmlFor="Other Intervention">
                      Other Intervention
                    </label>
                  </div>
                </div>
                <ul>
                  <li className="mt-4">
                    <a href="#division-24" className="my-primary-btn">
                      Next <FontAwesomeIcon icon={faArrowDown} />
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : null}

          <div className="mt-3" id="division-24">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Breathing Assessment:
            </h5>
            <div className="my-categories d-flex flex-row flex-wrap row-cols-4 justify-content-around gap-3">
              <div className="col">
                {" "}
                <div className="checkboxes d-flex flex-column gap-1">
                  <div className="label fw-bold mb-3">
                    Any Signs of repiratory distress?
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryDistressCheckboxChange}
                      type="checkbox"
                      value="Nill"
                      id="Nill"
                    />
                    <label className="fw-bold" htmlFor="Nill">
                      Nill
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryDistressCheckboxChange}
                      type="checkbox"
                      value="Central Cyanosis"
                      id="Central Cyanosis"
                    />
                    <label className="fw-bold" htmlFor="Central Cyanosis">
                      Central Cyanosis
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryDistressCheckboxChange}
                      type="checkbox"
                      value="Use of the accessory muscles"
                      id="Use of the accessory muscles"
                    />
                    <label
                      className="fw-bold"
                      htmlFor="Use of the accessory muscles"
                    >
                      Use of the accessory muscles
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryDistressCheckboxChange}
                      type="checkbox"
                      value="Abdominal Breathing"
                      id="Abdominal Breathing"
                    />
                    <label className="fw-bold" htmlFor="Abdominal Breathing">
                      Abdominal Breathing
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryDistressCheckboxChange}
                      type="checkbox"
                      value="Sweating"
                      id="Sweating"
                    />
                    <label className="fw-bold" htmlFor="Sweating">
                      Sweating
                    </label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="checkboxes d-flex flex-column gap-1">
                  <div className="label fw-bold mb-3">
                    Any abnormal respiratory noise?
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="No Respiratory Sounds"
                      id="None"
                    />
                    <label className="fw-bold" htmlFor="None">
                      None
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Wheezes"
                      id="Wheezes"
                    />
                    <label className="fw-bold" htmlFor="Wheezes">
                      Wheezes
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Crackles"
                      id="Crackles"
                    />
                    <label className="fw-bold" htmlFor="Crackles">
                      Crackles
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Rattling airway noises"
                      id="Rattling airway noises"
                    />
                    <label className="fw-bold" htmlFor="Rattling airway noises">
                      Rattling airway noises
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Abscent Sound (Right)"
                      id="Abscent Sound (Right)"
                    />
                    <label className="fw-bold" htmlFor="Abscent Sound (Right)">
                      Abscent Sound (Right)
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Abscent Sound (left)"
                      id="Abscent Sound (left)"
                    />
                    <label className="fw-bold" htmlFor="Abscent Sound (left)">
                      Abscent Sound (left)
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handleRespiratoryNoiseCheckboxChange}
                      type="checkbox"
                      value="Stridor"
                      id="Stridor"
                    />
                    <label className="fw-bold" htmlFor="Stridor">
                      Stridor
                    </label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="checkboxes d-flex flex-column gap-1">
                  <div className="label fw-bold mb-3">Percussions</div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePercussionsCheckboxChange}
                      type="checkbox"
                      value="Normal Resonance"
                      id="Normal Resonance"
                    />
                    <label className="fw-bold" htmlFor="Normal Resonance">
                      Normal Resonance
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePercussionsCheckboxChange}
                      type="checkbox"
                      value="Hyper-Resonance"
                      id="Hyper-Resonance"
                    />
                    <label className="fw-bold" htmlFor="Hyper-Resonance">
                      Hyper-Resonance
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePercussionsCheckboxChange}
                      type="checkbox"
                      value="Dull"
                      id="Dull"
                    />
                    <label className="fw-bold" htmlFor="Dull">
                      Dull
                    </label>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="checkboxes d-flex flex-column gap-1">
                  <div className="label fw-bold mb-3">Palpation</div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Normal Percussion"
                      id="Normal Percussion"
                    />
                    <label className="fw-bold" htmlFor="Normal Percussion">
                      Normal
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Surgical Emphysema"
                      id="Surgical Emphysema"
                    />
                    <label className="fw-bold" htmlFor="Surgical Emphysema">
                      Surgical Emphysema
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Crepitus"
                      id="Crepitus"
                    />
                    <label className="fw-bold" htmlFor="Crepitus">
                      Crepitus
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Deviated Trachea"
                      id="Deviated Trachea"
                    />
                    <label className="fw-bold" htmlFor="Deviated Trachea">
                      Deviated Trachea
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Distended Neck Vein"
                      id="Distended Neck Vein"
                    />
                    <label className="fw-bold" htmlFor="Distended Neck Vein">
                      Distended Neck Vein
                    </label>
                  </div>
                  <div className="check-box mx-3 d-flex flex-row gap-1">
                    <input
                      onChange={handlePalpationsCheckboxChange}
                      type="checkbox"
                      value="Chest Open Wound"
                      id="Chest Open Wound"
                    />
                    <label className="fw-bold" htmlFor="Chest Open Wound">
                      Chest Open Wound
                    </label>
                  </div>
                </div>
              </div>
              <div className="checkboxes d-flex flex-column gap-1">
                <div className="label fw-bold mb-3">Air Entry</div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAirEntriesCheckboxChange}
                    type="checkbox"
                    value="Bilateral Entry of Air"
                    id="Bilateral Entry of Air"
                  />
                  <label className="fw-bold" htmlFor="Bilateral Entry of Air">
                    Bilateral Entry of Air
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAirEntriesCheckboxChange}
                    type="checkbox"
                    value="Unilateral (Right)"
                    id="Unilateral (Right)"
                  />
                  <label className="fw-bold" htmlFor="Unilateral (Right)">
                    Unilateral (Right)
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAirEntriesCheckboxChange}
                    type="checkbox"
                    value="Unilateral (Left)"
                    id="Unilateral (Left)"
                  />
                  <label className="fw-bold" htmlFor="Unilateral (Left)">
                    Unilateral (Left)
                  </label>
                </div>
              </div>
              <div className="checkboxes d-flex flex-column gap-1">
                <div className="label fw-bold mb-3">Cough</div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleCoughCheckboxChange}
                    type="checkbox"
                    value="No Cough"
                    id="No Cough"
                  />
                  <label className="fw-bold" htmlFor="No Cough">
                    None
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleCoughCheckboxChange}
                    type="checkbox"
                    value="Dry Cough"
                    id="Dry Cough"
                  />
                  <label className="fw-bold" htmlFor="Dry Cough">
                    Dry
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleCoughCheckboxChange}
                    type="checkbox"
                    value="Productive Cough"
                    id="Productive Cough"
                  />
                  <label className="fw-bold" htmlFor="Productive Cough">
                    Productive Cough
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleCoughCheckboxChange}
                    type="checkbox"
                    value="Hemoptysis"
                    id="Hemoptysis"
                  />
                  <label className="fw-bold" htmlFor="Hemoptysis">
                    Hemoptysis
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3" id="division-25">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Circulation Assessment:
            </h5>
            <div className="my-categories d-flex justify-content-around flex-wrap row-cols-4 gap-3">
              <div className="checkboxes d-flex flex-column gap-1">
                <div className="label fw-bold mb-3">Abdomen</div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAbodmenCirculationCheckboxChange}
                    type="checkbox"
                    value="Soft, Non Tender"
                    id="Soft, Non Tender"
                  />
                  <label className="fw-bold" htmlFor="Soft, Non Tender">
                    Soft, Non Tender
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAbodmenCirculationCheckboxChange}
                    type="checkbox"
                    value="Tender"
                    id="Tender"
                  />
                  <label className="fw-bold" htmlFor="Tender">
                    Tender
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAbodmenCirculationCheckboxChange}
                    type="checkbox"
                    value="Distended"
                    id="Distended"
                  />
                  <label className="fw-bold" htmlFor="Distended">
                    Distended
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleAbodmenCirculationCheckboxChange}
                    type="checkbox"
                    value="Other Abdomen Condition"
                    id="Other Abdomen Condition"
                  />
                  <label className="fw-bold" htmlFor="Other Abdomen Condition">
                    Other Abdomen Condition
                  </label>
                </div>
              </div>
              <div className="checkboxes d-flex flex-column gap-1">
                <div className="label fw-bold mb-3">Source of Bleeding</div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleSourceOfBleedingCirculationCheckboxChange}
                    type="checkbox"
                    value="No Bleeding"
                    id="No Bleeding"
                  />
                  <label className="fw-bold" htmlFor="No Bleeding">
                    Nil
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleSourceOfBleedingCirculationCheckboxChange}
                    type="checkbox"
                    value="Bleeding (Yes)"
                    id="Bleeding (Yes)"
                  />
                  <label className="fw-bold" htmlFor="Bleeding (Yes)">
                    Yes
                  </label>
                </div>
              </div>
              <div className="checkboxes d-flex flex-column gap-1">
                <div className="label fw-bold mb-3">Urine Output</div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleUrineOutputCirculationCheckboxChange}
                    type="checkbox"
                    value="Normal Urine Output"
                    id="Normal Urine Output"
                  />
                  <label className="fw-bold" htmlFor="Normal Urine Output">
                    Normal Urine Output
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleUrineOutputCirculationCheckboxChange}
                    type="checkbox"
                    value="Frequent Urination"
                    id="Frequent Urination"
                  />
                  <label className="fw-bold" htmlFor="Frequent Urination">
                    Frequent Urination
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleUrineOutputCirculationCheckboxChange}
                    type="checkbox"
                    value="Low Urine Output"
                    id="Low Urine Output"
                  />
                  <label className="fw-bold" htmlFor="Low Urine Output">
                    Low Urine Output
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleUrineOutputCirculationCheckboxChange}
                    type="checkbox"
                    value="Hematuria"
                    id="Hematuria"
                  />
                  <label className="fw-bold" htmlFor="Hematuria">
                    Hematuria
                  </label>
                </div>
                <div className="check-box mx-3 d-flex flex-row gap-1">
                  <input
                    onChange={handleUrineOutputCirculationCheckboxChange}
                    type="checkbox"
                    value="Anuric"
                    id="Anuric"
                  />
                  <label className="fw-bold" htmlFor="Anuric">
                    Anuric
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div id="division-26">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Disability Assessment:
            </h5>
            <ul>
              <li className="mb-3 mt-3">
                <a
                  onClick={(e) => setDisabilityAssesRequired("gcs")}
                  className=""
                >
                  <div className="options d-flex gap-1">
                    <input
                      type="radio"
                      checked={disabilityAssesRequired == "gcs"}
                    />
                    <label
                      htmlFor=""
                      className="fw-bold"
                      style={{ fontSize: "20px" }}
                    >
                      GCS
                    </label>
                  </div>
                </a>
              </li>
              <li className="mb-3 mt-3">
                <a
                  onClick={(e) => setDisabilityAssesRequired("avpu")}
                  className=""
                >
                  <div className="options d-flex gap-1">
                    <input
                      type="radio"
                      checked={disabilityAssesRequired == "avpu"}
                    />
                    <label
                      htmlFor=""
                      className="fw-bold"
                      style={{ fontSize: "20px" }}
                    >
                      AVPU
                    </label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {disabilityAssesRequired == "gcs" ? (
            <>
              <div className="mx-5" id="division-26-a">
                <h5
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4rem",
                  }}
                  className="mb-4"
                >
                  GCS:
                </h5>
                <div className="my-checkboxes d-flex flex-wrap gap-3 justify-content-around">
                  <div className="checkboxes d-flex flex-column gap-1">
                    <div
                      className="label fw-bold mb-3"
                      style={{ fontSize: "27px" }}
                    >
                      E
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleEChange}
                        type="radio"
                        checked={E == 4}
                        value={`${4}`}
                        id="Spontaneously"
                      />
                      <label className="fw-bold" htmlFor="Spontaneously">
                        Spontaneously
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        type="radio"
                        onChange={handleEChange}
                        checked={E == 3}
                        value={`${3}`}
                        id="To Verbal Command"
                      />
                      <label className="fw-bold" htmlFor="To Verbal Command">
                        To Verbal Command
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleEChange}
                        type="radio"
                        checked={E == 2}
                        value={`${2}`}
                        id="To Pain"
                      />
                      <label className="fw-bold" htmlFor="To Pain">
                        To Pain
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        type="radio"
                        onChange={handleEChange}
                        checked={E == 1}
                        value={`${1}`}
                        id="No Eye Opening"
                      />
                      <label className="fw-bold" htmlFor="No Eye Opening">
                        No Eye Opening
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleEChange}
                        type="radio"
                        checked={E == "Not Testable E"}
                        value="Not Testable E"
                        id="Not Testable E"
                      />
                      <label className="fw-bold" htmlFor="Not Testable E">
                        Not Testable
                      </label>
                    </div>
                  </div>
                  <div className="checkboxes d-flex flex-column gap-1">
                    <div
                      className="label fw-bold mb-3"
                      style={{ fontSize: "27px" }}
                    >
                      V
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == 5}
                        value={`${5}`}
                        id="Oriented"
                      />
                      <label className="fw-bold" htmlFor="Oriented">
                        Oriented
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == 4}
                        value={`${4}`}
                        id="Confused"
                      />
                      <label className="fw-bold" htmlFor="Confused">
                        Confused
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == 3}
                        value={`${3}`}
                        id="Inappropriate Words"
                      />
                      <label className="fw-bold" htmlFor="Inappropriate Words">
                        Inapropriate Words
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == 2}
                        value={`${2}`}
                        id="Uncomprehensive Sounds"
                      />
                      <label
                        className="fw-bold"
                        htmlFor="Uncomprehensive Sounds"
                      >
                        Uncomprehensive Sounds
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == 1}
                        value={`${1}`}
                        id="No Verbal Response"
                      />
                      <label className="fw-bold" htmlFor="No Verbal Response">
                        No Verbal Response
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleVChange}
                        type="radio"
                        checked={V == "Not Testable V"}
                        value="Not Testable V"
                        id="Not Testable V"
                      />
                      <label className="fw-bold" htmlFor="Not Testable V">
                        Not Testable
                      </label>
                    </div>
                  </div>
                  <div className="checkboxes d-flex flex-column gap-1">
                    <div
                      className="label fw-bold mb-3"
                      style={{ fontSize: "27px" }}
                    >
                      M
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 6}
                        value={`${6}`}
                        id="Obey Commands"
                      />
                      <label className="fw-bold" htmlFor="Obey Commands">
                        Obey Commands
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 5}
                        value={`${5}`}
                        id="Localizes Pain"
                      />
                      <label className="fw-bold" htmlFor="Localizes Pain">
                        Localizes Pain
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 4}
                        value={`${4}`}
                        id="Withdrawal from pain"
                      />
                      <label className="fw-bold" htmlFor="Withdrawal from pain">
                        Withdrawal from pain
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 3}
                        value={`${3}`}
                        id="Flexion to pain"
                      />
                      <label className="fw-bold" htmlFor="Flexion to pain">
                        Flexion to pain
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 2}
                        value={`${2}`}
                        id="Extension to pain"
                      />
                      <label className="fw-bold" htmlFor="Extension to pain">
                        Extension to pain
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == 1}
                        value={`${1}`}
                        id="No Motor Response"
                      />
                      <label className="fw-bold" htmlFor="No Motor Response">
                        No Motor Response
                      </label>
                    </div>
                    <div className="check-box mx-3 d-flex flex-row gap-1">
                      <input
                        onChange={handleMChange}
                        type="radio"
                        checked={M == "Not Testable M"}
                        value="Not Testable M"
                        id="Not Testable M"
                      />
                      <label className="fw-bold" htmlFor="Not Testable M">
                        Not Testable M
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
          {disabilityAssesRequired == "avpu" ? (
            <>
              <div className="mx-5" id="division-26-b">
                <h5
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "600",
                    marginTop: "4rem",
                  }}
                  className="mb-4"
                >
                  AVPU:
                </h5>
                <div className="label fw-bold">Please Enter AVPU Score</div>
                <select
                  name=""
                  onChange={handleAVPUChange}
                  className="form-control-sm "
                  id=""
                >
                  <option value="Alert">Alert</option>
                  <option value="Confused(New Episode)">
                    Confused(New Episode)
                  </option>
                  <option value="Painful Stimulation">
                    Painful Stimulation
                  </option>
                  <option value="Unresponsive">Unresponsive</option>
                </select>
                <div
                  className="label mb-3 mt-5 fw-bold"
                  style={{ fontSize: "30px" }}
                >
                  Blood Glucose
                </div>
                <input
                  type="number"
                  onChange={(e) => setBloodGlucose(e.target.value)}
                  className="form-control-sm"
                />
              </div>
              <div className="division pupils d-flex flex-row mx-5 mt-5 justify-content-start gap-4">
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="fw-bold mb-3">Right Pupil</div>
                  <div className="fw-bold mb-2">Shape</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setRightPupil(e.target.value)}
                    className="form-control-sm mb-3"
                  >
                    <option value="Regular">Regular</option>
                    <option value="Irregular">Irregular</option>
                    <option value="Unable to access">Unable to access</option>
                  </select>
                  <div className="fw-bold mb-2">Responsiveness to light</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setRightPupilResponsiveness(e.target.value)
                    }
                    className="form-control-sm mb-3"
                  >
                    <option value="Brisk">Brisk</option>
                    <option value="Sluggish">Sluggish</option>
                    <option value="Non Reactive">Non Reactive</option>
                    <option value="Unable to access">Unable to access</option>
                  </select>
                  <div className="fw-bold mb-2">Size (in mm)</div>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={rightPupilSize}
                    onChange={(e) => setRightPupilSize(e.target.value)}
                  />
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="fw-bold  mb-3">Left Pupil</div>
                  <div className="fw-bold mb-2">Shape</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setLeftPupil(e.target.value)}
                    className="form-control-sm mb-3"
                  >
                    <option value="Regular">Regular</option>
                    <option value="Irregular">Irregular</option>

                    <option value="Unable to access">Unable to access</option>
                  </select>
                  <div className="fw-bold mb-2">Responsiveness to light</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setleftPupilResponsiveness(e.target.value)}
                    className="form-control-sm mb-3"
                  >
                    <option value="Brisk">Brisk</option>
                    <option value="Sluggish">Sluggish</option>
                    <option value="Non Reactive">Non Reactive</option>
                    <option value="Unable to access">Unable to access</option>
                  </select>
                  <div className="fw-bold mb-2">Size (in mm)</div>
                  <input
                    type="text"
                    className="form-control mb-3"
                    value={leftPupilSize}
                    onChange={(e) => setLeftPupilSize(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="label mx-5 mb-3 mt-5 fw-bold"
                style={{ fontSize: "30px" }}
              >
                Limb Movement
              </div>

              <div className="division pupils d-flex flex-row mx-5 mt-5 justify-content-start gap-4 ">
                <div className="d-flex  flex-column align-items-center gap-2">
                  <div className="fw-bold">Left Arm</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setLeftArmMovement(e.target.value)}
                    className="form-control-sm"
                  >
                    <option value="Normal Power">Normal Power</option>
                    <option value="Mild Weakness">Mild Weakness</option>
                    <option value="Severe Weakness">Severe Weakness</option>
                    <option value="Spastic Flexion">Spastic Flexion</option>
                    <option value="Extension">Extension</option>
                    <option value="No Left Arm Response">
                      No Response
                    </option>{" "}
                  </select>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="fw-bold">Left Leg</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setLefLegMovement(e.target.value)}
                    className="form-control-sm"
                  >
                    <option value="Normal Power">Normal Power</option>
                    <option value="Mild Weakness">Mild Weakness</option>
                    <option value="Severe Weakness">Severe Weakness</option>
                    <option value="Spastic Flexion">Spastic Flexion</option>
                    <option value="Extension">Extension</option>
                    <option value="No Left Leg Response">No Response</option>
                  </select>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="fw-bold">Right Arm</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setRightArmMovement(e.target.value)}
                    className="form-control-sm"
                  >
                    <option value="Normal Power">Normal Power</option>
                    <option value="Mild Weakness">Mild Weakness</option>
                    <option value="Severe Weakness">Severe Weakness</option>
                    <option value="Spastic Flexion">Spastic Flexion</option>
                    <option value="Extension">Extension</option>
                    <option value="No Right Arm Response">No Response</option>
                  </select>
                </div>
                <div className="d-flex flex-column align-items-center gap-2">
                  <div className="fw-bold">Right Leg</div>
                  <select
                    name=""
                    id=""
                    onChange={(e) => setRightLegMovement(e.target.value)}
                    className="form-control-sm"
                  >
                    <option value="Normal Power">Normal Power</option>
                    <option value="Mild Weakness">Mild Weakness</option>
                    <option value="Severe Weakness">Severe Weakness</option>
                    <option value="Spastic Flexion">Spastic Flexion</option>
                    <option value="Extension">Extension</option>
                    <option value="No Right Leg Response">No Response</option>
                  </select>
                </div>
              </div>
            </>
          ) : null}

          <div id="division-28">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Exposure
            </h5>
            <div className="d-flex flex-column mx-5 mt-4 align-items-start gap-3">
              <div className="d-flex flex-column align-items-center gap-2">
                <div className="fw-bold" style={{ fontSize: "21px" }}>
                  Temperature:
                </div>
                <div className="d-flex flex-row gap-1 align-items-center justify-content-around">
                  <span>25</span>
                  <input
                    max="45"
                    step="0.1"
                    min="25"
                    type="range"
                    style={{ width: "25rem", boxShadow: "none" }}
                    className="form-range"
                    onChange={(e) => setTemperature(e.target.value)}
                    name=""
                    id=""
                  />
                  <span>45</span>
                </div>
                <span className="temp-value fw-bold text-center">
                  {temperature} C
                </span>
              </div>
            </div>
          </div>
          <div id="division-29">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Pressure Sores
            </h5>
            <div className="label mx-5 fw-bold mb-3">Is the Skin intact?</div>
            <ul className="mx-5">
              <li>
                <a onClick={(e) => setSkinIntact(true)} href="#division-30">
                  <div className="option d-flex gap-1">
                    <input type="radio" checked={skinIntact == true} id="" />
                    <label htmlFor="">Yes</label>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={(e) => setSkinIntact("no")} href="#division-29-a">
                  <div className="option d-flex gap-1">
                    <input type="radio" checked={skinIntact == "no"} id="" />
                    <label htmlFor="">No</label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {skinIntact == "no" ? (
            <>
              <div className="d-flex mx-5 lines mt-5 flex-column gap-2">
                {sores.map((line) => {
                  return (
                    <>
                      <div className="pain">
                        <span>{line.d1}</span>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="d-flex flex-row align-items-center mx-5 justify-content-start mt-4">
                <button
                  onClick={(e) => {
                    setOptionsModalShowing(true);
                    setAddSoresFormShowing(true);
                  }}
                  className="my-primary-btn"
                >
                  Add Presure Sore Report <FontAwesomeIcon icon={faAdd} />
                </button>
              </div>
            </>
          ) : null}
        </div>
        {skinIntact == "no" ? (
          <div id="division-29">
            <h5
              style={{
                color: "black",
                fontSize: "25px",
                fontWeight: "600",
                marginTop: "4rem",
              }}
              className="mb-4"
            >
              Was Pressure Reported
            </h5>
            <div className="label mx-5 fw-bold mb-3">Is the Skin intact?</div>
            <ul className="mx-5">
              <li>
                <a
                  onClick={(e) => {
                    setPressureSoreWasReported(true);
                    setDatixNumberFormShowing(true);
                    setOptionsModalShowing(true);
                  }}
                >
                  <div className="option d-flex gap-1">
                    <input
                      type="radio"
                      checked={pressureSoreWasReported == true}
                      id=""
                    />
                    <label htmlFor="">Yes</label>
                  </div>
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => setPressureSoreWasReported(false)}
                  href="#division-29-a"
                >
                  <div className="option d-flex gap-1">
                    <input
                      type="radio"
                      checked={pressureSoreWasReported == false}
                      id=""
                    />
                    <label htmlFor="">No</label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        ) : null}

        <div id="division-30" className="mt-5">
          <h5
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "4rem",
            }}
            className="mb-4"
          >
            Pain Assessment
          </h5>
          <div className="d-flex flex-column mx-5">
            <div className="fw-bold mt-3 mb-3">Does the pain reports pain?</div>
            <ul>
              <li className="mb-3">
                <a onClick={(e) => setPainAssesment(true)} href="#">
                  <div className="option d-flex gap-1">
                    <input type="radio" checked={painAssesment == true} id="" />
                    <label htmlFor="">Yes</label>
                  </div>
                </a>
              </li>
              <li className="mb-3">
                <a onClick={(e) => setPainAssesment(false)} href="#division-31">
                  <div className="option d-flex gap-1">
                    <input
                      type="radio"
                      checked={painAssesment == false}
                      id=""
                    />
                    <label htmlFor="">No</label>
                  </div>
                </a>
              </li>
            </ul>
            {painAssesment ? (
              <>
                <div
                  id="division-30-a"
                  className="division d-flex flex-row row-cols-4 flex-wrap gap-5"
                >
                  <div className="d-flex pains flex-column gap-2">
                    {addedPains.map((pain) => {
                      return (
                        <>
                          <div className="d-flex flex-row gap-1 pain align-items-center">
                            <span className="pain-name">{pain.d1}</span>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
                <div className="d-flex flex-row mt-5 align-items-center justify-content-start">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setOptionsModalShowing(true);
                      setAddPainsFormShowing(true);
                    }}
                    className="my-primary-btn"
                  >
                    Add New <FontAwesomeIcon icon={faAdd} />
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <div id="division-31" className="mt-5 mb-5">
          <h5
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "4rem",
            }}
            className="mb-4"
          >
            Social History
          </h5>
          <div className="d-flex flex-row gap-4 flex-wrap row-cols-4 justify-content-around">
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Elimiation</div>
              <div className="option">
                <input
                  checked={elimination == "Continent"}
                  onChange={(e) => {
                    setElimination(e.target.value);
                  }}
                  type="radio"
                  value="Continent"
                  id="Continent"
                />
                <label htmlFor="Continent">Continent</label>
              </div>
              <div className="option">
                <input
                  checked={elimination == "Double incontinent"}
                  onChange={(e) => {
                    setElimination(e.target.value);
                  }}
                  type="radio"
                  value="Double incontinent"
                  id="Double incontinent"
                />
                <label htmlFor="Double incontinent">Double incontinent</label>
              </div>
              <div className="option">
                <input
                  checked={elimination == "Urine incontinent"}
                  onChange={(e) => {
                    setElimination(e.target.value);
                  }}
                  type="radio"
                  value="Urine incontinent"
                  id="Urine incontinent"
                />
                <label htmlFor="Urine incontinent">Urine incontinent</label>
              </div>
              <div className="option">
                <input
                  checked={elimination == "Bowel incontinent"}
                  onChange={(e) => {
                    setElimination(e.target.value);
                  }}
                  type="radio"
                  value="Bowel incontinent"
                  id="Bowel incontinent"
                />
                <label htmlFor="Bowel incontinent">Bowel incontinent</label>
              </div>
              <div className="option">
                <input
                  checked={elimination == "Other Elimination"}
                  onChange={(e) => {
                    setElimination(e.target.value);
                  }}
                  type="radio"
                  value="Other Elimination"
                  id="Other Elimination"
                />
                <label htmlFor="Other Elimination">Other Elimination</label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Accomodation</div>
              <div className="option">
                <input
                  checked={accomodation == "House"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="House"
                  id="House"
                />
                <label htmlFor="House">House</label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Flat"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Flat"
                  id="Flat"
                />
                <label htmlFor="Flat">Flat</label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Sheltered Accomodation"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Sheltered Accomodation"
                  id="Sheltered Accomodation"
                />
                <label htmlFor="Sheltered Accomodation">
                  Sheltered Accomodation
                </label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Nursing Home"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Nursing Home"
                  id="Nursing Home"
                />
                <label htmlFor="Nursing Home">Nursing Home</label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Visitor"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Visitor"
                  id="Visitor"
                />
                <label htmlFor="Visitor">Visitor</label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Homeless"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Homeless"
                  id="Homeless"
                />
                <label htmlFor="Homeless">Homeless</label>
              </div>
              <div className="option">
                <input
                  checked={accomodation == "Other Accomodation"}
                  onChange={(e) => {
                    setAccomodation(e.target.value);
                  }}
                  type="radio"
                  value="Other Accomodation"
                  id="Other Accomodation"
                />
                <label htmlFor="Other Accomodation">Other Accomodation</label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Lives with</div>
              <div className="option">
                <input
                  checked={livesWith == "Alone"}
                  onChange={(e) => {
                    setlivesWith(e.target.value);
                  }}
                  type="radio"
                  value="Alone"
                  id="Alone"
                />
                <label htmlFor="Alone">Alone</label>
              </div>
              <div className="option">
                <input
                  checked={livesWith == "Family"}
                  onChange={(e) => {
                    setlivesWith(e.target.value);
                  }}
                  type="radio"
                  value="Family"
                  id="Family"
                />
                <label htmlFor="Family">Family</label>
              </div>
              <div className="option">
                <input
                  checked={livesWith == "Carer"}
                  onChange={(e) => {
                    setlivesWith(e.target.value);
                  }}
                  type="radio"
                  value="Carer"
                  id="Carer"
                />
                <label htmlFor="Carer">Carer</label>
              </div>
              <div className="option">
                <input
                  checked={livesWith == "Lives with Other"}
                  onChange={(e) => {
                    setlivesWith(e.target.value);
                  }}
                  type="radio"
                  value="Lives with Other"
                  id="Lives with Other"
                />
                <label htmlFor="Lives with Other">Other</label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Mobility</div>
              <div className="option">
                <input
                  checked={mobility == "Independent"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Independent"
                  id="Independent"
                />
                <label htmlFor="Independent">Independent</label>
              </div>
              <div className="option">
                <input
                  checked={mobility == "Walks with stick"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Walks with stick"
                  id="Walks with stick"
                />
                <label htmlFor="Walks with stick">Walks with stick</label>
              </div>
              <div className="option">
                <input
                  checked={mobility == "Zimmer Frame"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Zimmer Frame"
                  id="Zimmer Frame"
                />
                <label htmlFor="Zimmer Frame">Zimmer Frame</label>
              </div>
              <div className="option">
                <input
                  checked={mobility == "Walks with Wheelchair"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Walks with Wheelchair"
                  id="Walks with Wheelchair"
                />
                <label htmlFor="Walks with Wheelchair">
                  Walks with Wheelchair
                </label>
              </div>
              <div className="option">
                <input
                  checked={mobility == "Bed Bound"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Bed Bound"
                  id="Bed Bound"
                />
                <label htmlFor="Bed Bound">Bed Bound</label>
              </div>
              <div className="option">
                <input
                  checked={mobility == "Walks with something else"}
                  onChange={(e) => {
                    setMobility(e.target.value);
                  }}
                  type="radio"
                  value="Walks with something else"
                  id="Walks with something else"
                />
                <label htmlFor="Walks with something else">
                  Walks with something else
                </label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Package of Care</div>
              <div className="option">
                <input
                  checked={packageOfCare == "No PDC"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="No PDC"
                  id="No PDC"
                />
                <label htmlFor="No PDC">No PDC</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "Once Daily"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="Once Daily"
                  id="Once Daily"
                />
                <label htmlFor="Once Daily">Once Daily</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "Twice a day"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="Twice a day"
                  id="Twice a day"
                />
                <label htmlFor="Twice a day">Twice a day</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "3 Times a day"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="3 Times a day"
                  id="3 Times a day"
                />
                <label htmlFor="3 Times a day">3 Times a day</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "4 Times a day"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="4 Times a day"
                  id="4 Times a day"
                />
                <label htmlFor="4 Times a day">4 Times a day</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "24 Hours care"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="24 Hours care"
                  id="24 Hours care"
                />
                <label htmlFor="24 Hours care">24 Hours care</label>
              </div>
              <div className="option">
                <input
                  checked={packageOfCare == "Othe Care Package"}
                  onChange={(e) => {
                    setPackageOfCare(e.target.value);
                  }}
                  type="radio"
                  value="Othe Care Package"
                  id="Othe Care Package"
                />
                <label htmlFor="Othe Care Package">Othe Care Package</label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Smoking</div>
              <div className="option">
                <input
                  checked={smokingHistory == "Never Smoked"}
                  onChange={(e) => {
                    setSmokingHistory(e.target.value);
                  }}
                  type="radio"
                  value="Never Smoked"
                  id="Never Smoked"
                />
                <label htmlFor="Never Smoked">Never Smoked</label>
              </div>
              <div className="option">
                <input
                  checked={smokingHistory == "Ex-Smoker"}
                  onChange={(e) => {
                    setSmokingHistory(e.target.value);
                  }}
                  type="radio"
                  value="Ex-Smoker"
                  id="Ex-Smoker"
                />
                <label htmlFor="Ex-Smoker">Ex-Smoker</label>
              </div>
              <div className="option">
                <input
                  checked={smokingHistory == "Currently Smoker"}
                  onChange={(e) => {
                    setSmokingHistory(e.target.value);
                  }}
                  type="radio"
                  value="Currently Smoker"
                  id="Currently Smoker"
                />
                <label htmlFor="Currently Smoker">Currently Smoker</label>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="fw-bold border-bottom">Smoking</div>
              <div className="option">
                <input
                  checked={drinkingHistory == "No Alcohol Consumption"}
                  onChange={(e) => {
                    setDrinkingHistory(e.target.value);
                  }}
                  type="radio"
                  value="No Alcohol Consumption"
                  id="No Alcohol Consumption"
                />
                <label htmlFor="No Alcohol Consumption">
                  No Alcohol Consumption
                </label>
              </div>
              <div className="option">
                <input
                  checked={drinkingHistory == "Occasionally"}
                  onChange={(e) => {
                    setDrinkingHistory(e.target.value);
                  }}
                  type="radio"
                  value="Occasionally"
                  id="Occasionally"
                />
                <label htmlFor="Occasionally">Occasionally</label>
              </div>
              <div className="option">
                <input
                  checked={drinkingHistory == "Never Drink"}
                  onChange={(e) => {
                    setDrinkingHistory(e.target.value);
                  }}
                  type="radio"
                  value="Never Drink"
                  id="Never Drink"
                />
                <label htmlFor="Never Drink">Never Drink</label>
              </div>
            </div>
          </div>
        </div>
        <div id="division-32" className="section assesment-section">
          <h5
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
            className=""
          >
            Lines/Tubes
          </h5>
          <div className="d-flex lines flex-column gap-2">
            {lines.map((line) => {
              return (
                <>
                  <div className="pain">
                    <span>{line.d1}</span>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex flex-row align-items-center justify-content-start mt-4">
            <button
              onClick={(e) => {
                setOptionsModalShowing(true);
                setAddLinesFormShowing(true);
              }}
              className="my-primary-btn"
            >
              Add Line / Tube <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </div>
        <div id="division-32" className="section assesment-section">
          <h5
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "600",
              marginTop: "4rem",
              marginBottom: "4rem",
            }}
            className=""
          >
            Frailty Score
          </h5>
          <div className="d-flex mx-5 flex-row row-cols-2 ">
            <div className="col-3">
              <div className="d-flex flex-column gap-2">
                <h5 className="fw-bold">Select Frailty Score</h5>
              </div>
              <div className="options mx-5 mt-3 d-flex flex-column align-items-start gap-1">
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "1"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="1"
                    id="1"
                  />
                  <label htmlFor="1">1</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "2"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="2"
                    id="2"
                  />
                  <label htmlFor="2">2</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "3"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="3"
                    id="3"
                  />
                  <label htmlFor="3">3</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "4"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="4"
                    id="4"
                  />
                  <label htmlFor="4">4</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "5"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="5"
                    id="5"
                  />
                  <label htmlFor="5">5</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "6"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="6"
                    id="6"
                  />
                  <label htmlFor="6">6</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "7"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="7"
                    id="7"
                  />
                  <label htmlFor="7">7</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "8"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="8"
                    id="8"
                  />
                  <label htmlFor="8">8</label>
                </div>
                <div className="option gap-1 d-flex flex-row">
                  <input
                    checked={frailtyScore == "9"}
                    onChange={(e) => setFrailtyScore(e.target.value)}
                    type="radio"
                    value="9"
                    id="9"
                  />
                  <label htmlFor="9">9</label>
                </div>
              </div>
            </div>
            <div className="col-9">
              <img style={{ width: "100%" }} src={frailtyScoreImg} alt="" />
            </div>
          </div>
        </div>
        <div className="mt-5 mb-3" id="division-34">
          <h3 className="fw-bold mb-3">Mental Health Assessment</h3>
          <div className="d-flex flex-column mx-5">
            <div className="fw-bold">
              Is there any mental health concern during this visit?
            </div>
            <ul>
              <li>
                <a
                  href="#division-35"
                  onClick={(e) => setMentalHealthConcern(true)}
                >
                  <div className="option">
                    <input
                      type="radio"
                      checked={mentalHealthConcern == true}
                      id="YesMentalHealthAssis"
                    />
                    <label htmlFor="YesMentalHealthAssis">Yes</label>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="#division-36"
                  onClick={(e) => setMentalHealthConcern("no")}
                >
                  <div className="option">
                    <input
                      type="radio"
                      checked={mentalHealthConcern == "no"}
                      id="NoMentalAssis"
                    />
                    <label htmlFor="NoMentalAssis">No</label>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {mentalHealthConcern == true ? (
          <form
            onSubmit={(e) => e.preventDefault()}
            id="division-35"
            className="mt-5 mb-3"
          >
            <h4 className="mt-2 mb-3">MENTAL STATE EXAMINATION</h4>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                DISTINCTIVE FEATURES
              </label>
              <input
                onChange={(e) => setDistFeatures(e.target.value)}
                name="DISTINCTIVE-FEATURES"
                type="text"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                Clothing
              </label>
              <input
                type="text"
                onChange={(e) => setClothing(e.target.value)}
                name="Clothing"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                POSTURE/GAIT
              </label>
              <input
                type="text"
                name="POSTURE"
                onChange={(e) => setPostureGait(e.target.value)}
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                GROOMING/HYGIENE
              </label>
              <input
                type="text"
                name="GROOMING"
                onChange={(e) => setGrooming(e.target.value)}
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-column gap-2">
              <label htmlFor="" className="fw-bold">
                Obvious SELF-HARM signs
              </label>
              <div className="d-flex flex-column">
                <ul>
                  <li>
                    <div
                      onClick={(e) => setObviousSelfHarm(true)}
                      className="option"
                    >
                      <input
                        name="self_harm"
                        checked={obviousSelfHarm == true}
                        type="radio"
                        id="yes-self-harm"
                      />
                      <label htmlFor="yes-self-harm">Yes</label>
                    </div>
                  </li>
                  <li>
                    <div
                      className="option"
                      onClick={(e) => setObviousSelfHarm(false)}
                    >
                      <input
                        name="self_harm"
                        type="radio"
                        checked={obviousSelfHarm == false}
                        id="no-self-harm"
                      />
                      <label htmlFor="no-self-harm">No</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-column gap-2">
              <label htmlFor="" className="fw-bold">
                ALCOHOL
              </label>
              <div className="d-flex flex-column">
                <ul>
                  <li>
                    <div className="option">
                      <input name="alcohol" type="radio" id="yes-to-alcohol" />
                      <label htmlFor="yes-to-alcohol">Yes</label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input name="alcohol" type="radio" id="no-to-alcohol" />
                      <label htmlFor="no-to-alcohol">No</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-column gap-2">
              <label htmlFor="" className="fw-bold">
                DRUGS
              </label>
              <div className="d-flex flex-column">
                <ul>
                  <li>
                    <div className="option">
                      <input name="drugs" type="radio" id="yes-to-drugs" />
                      <label htmlFor="yes-to-drugs">Yes</label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input name="drugs" type="radio" id="no-to-drugs" />
                      <label htmlFor="no-to-drugs">No</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-column gap-2">
              <label htmlFor="" className="fw-bold">
                OVERDOSE
              </label>
              <div className="d-flex flex-column">
                <ul>
                  <li>
                    <div className="option">
                      <input
                        name="overdose"
                        type="radio"
                        id="yes-to-overdose"
                      />
                      <label htmlFor="yes-to-overdose">Yes</label>
                    </div>
                  </li>
                  <li>
                    <div className="option">
                      <input name="overdose" type="radio" id="no-to-overdose" />
                      <label htmlFor="no-to-overdose">No</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="medications-use  justify-content-start align-items-start d-flex flex-column">
              <h5 className="mt-2 mb-2 fw-bold">MEDICATION</h5>

              <div className="medications d-flex flex-wrap flex-row gap-2 align-items-center justify-content-start">
                {mentalMedications.map((med) => {
                  return (
                    <div className="medication">
                      <span>{med.d1}</span>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={(e) => {
                  setOptionsModalShowing(true);
                  setAddMentalMedicationFormShowing(true);
                }}
                className="my-primary-btn mt-3"
              >
                ADD MEDICATIONS <FontAwesomeIcon icon={faAdd} />
              </button>
            </div>
            <h5 className="mt-5 mb-3 fw-bold">BAHAVIOUR</h5>
            <div className="option d-flex flex-wrap mb-2 flex-column gap-2">
              <label htmlFor="" className="fw-bold">
                EYE CONTACT
              </label>
              <div className="d-flex flex-column">
                <ul>
                  <li>
                    <div
                      onClick={(e) => setEyeContact("Yes")}
                      className="option"
                    >
                      <input
                        checked={eyeContact == "Yes"}
                        name="eye_contact"
                        type="radio"
                        id="yes-to-eye-contact"
                      />
                      <label htmlFor="yes-to-eye-contact">Yes</label>
                    </div>
                  </li>
                  <li>
                    <div
                      className="option"
                      onClick={(e) => setEyeContact("No")}
                    >
                      <input
                        checked={eyeContact == "No"}
                        name="eye_contact"
                        type="radio"
                        id="no-to-eye-contact"
                      />
                      <label htmlFor="no-to-eye-contact">No</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                FACIAL EXPRESSION
              </label>
              <input
                type="text"
                onChange={(e) => setFacialExpression(e.target.value)}
                name="facial_expression"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                PSYCHOMOTOR ACITVITY
              </label>
              <input
                onChange={(e) => setPsychomotorActivity(e.target.value)}
                type="text"
                name="psychomotor_activity"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                BODY LANGUAGE/GESTURES/MANNERIS
              </label>
              <input
                onChange={(e) => setBodyLanguage(e.target.value)}
                type="text"
                name="body_language"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                LEVEL OF AROUSAL
              </label>
              <select
                onChange={(e) => setLevelOfArousal(e.target.value)}
                name="level_of_arousal"
                id=""
                className="form-control-sm"
              >
                <option value="CALM">CALM</option>
                <option value="AGITATED">AGITATED</option>
                <option value="AGGRESSIE">AGGRESSIE</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                ABILITY TO FOLLOW REQUESTS
              </label>
              <input
                onChange={(e) => setAbilityToFollowRequest(e.target.value)}
                type="text"
                name="ability_to_follow_request"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                RAPPORT/ENGAGEMENT
              </label>
              <input
                type="text"
                onChange={(e) => setRapport(e.target.value)}
                name="rapport"
                className="form-control-sm"
              />
            </div>
            <h5 className="mt-3 mb-3 fw-bold">Speech</h5>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                RATE
              </label>
              <select
                onChange={(e) => setRate(e.target.value)}
                name="rate"
                id=""
                className="form-control-sm"
              >
                <option value="PRESSURED">PRESSURED</option>
                <option value="SLOWED">SLOWED</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                QUANTITY
              </label>
              <select
                onChange={(e) => setQuantity(e.target.value)}
                name="quantity"
                id=""
                className="form-control-sm"
              >
                <option value="NORMAL">NORMAL</option>
                <option value="MINIMAL">MINIMAL</option>
                <option value="EXCESSIVE">EXCESSIVE</option>
                <option value="ABSENT">ABSENT</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                TONE
              </label>
              <select
                name="tone"
                onChange={(e) => setTone(e.target.value)}
                id=""
                className="form-control-sm"
              >
                <option value="MONOTONOUS">MONOTONOUS</option>
                <option value="TREMULOUS">TREMULOUS</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                VOLUME
              </label>
              <input
                type="text"
                name="volume"
                onChange={(e) => setVolume(e.target.value)}
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                FLUENCY AND RHYTHM
              </label>
              <select
                onChange={(e) => setFluencyAndRhythm(e.target.value)}
                name="fluency_and_rhythm"
                id=""
                className="form-control-sm"
              >
                <option value="ARTICULATED">ARTICULATED</option>
                <option value="CLEAR">CLEAR</option>
                <option value="SLURRED">SLURRED</option>
              </select>
            </div>
            <h5 className="mt-3 mb-3 fw-bold">MOOD</h5>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                MOOD STATE
              </label>
              <input
                onChange={(e) => setMoodState(e.target.value)}
                type="text"
                name="mood_state"
                className="form-control-sm"
              />
            </div>
            <h5 className="mt-5 mb-3 fw-bold">THOUGHT</h5>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                SUICIDAL THOUGHTS
              </label>
              <select
                onChange={(e) => setSuicidalThoughts(e.target.value)}
                name="suicidal_thoughts"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                SUICIDAL PLAN IN PLACE
              </label>
              <select
                onChange={(e) => setSuicidalPlanInPlace(e.target.value)}
                name="suicidal_plan"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                Please describe the suicidal plan that the patient described
              </label>
              <input
                onChange={(e) => setSuicidalPlanDesc(e.target.value)}
                type="text"
                name="suicide_plan_desc"
                className="form-control-sm"
              />
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                Any Previous Suicidal attempt in the past ?
              </label>
              <select
                onChange={(e) => setPreviousSuidicalAttempt(e.target.value)}
                name="suicide_attempt_in_past"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                HARM-OTHER THOUGHTS
              </label>
              <select
                onChange={(e) => setHarmOthers(e.target.value)}
                name="harm_others_thoughts"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                HOMOCIDAL/VIOLENT THOUGHTS
              </label>
              <select
                onChange={(e) => setHomicidalThoughts(e.target.value)}
                name="homocidal_thoughts"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                HALUCINATION
              </label>
              <select
                name="halucination"
                id=""
                onChange={(e) => setHalucination(e.target.value)}
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                Please describe how the patient is hallucinating:
              </label>
              <input
                onChange={(e) => setHalucinationDesc(e.target.value)}
                type="text"
                name="halucinating_desc"
                className="form-control-sm"
              />
            </div>
            <h5 className="mt-5 mb-3 fw-bold">COGNITION</h5>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                ORIENTATION
              </label>
              <select
                onChange={(e) => setOrientation(e.target.value)}
                name="orientation"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <h5 className="mt-5 mb-3 fw-bold">INSIGHT</h5>
            <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
              <label htmlFor="" className="fw-bold">
                Does the patient asking for help?
              </label>
              <select
                onChange={(e) => setAskingForHelp(e.target.value)}
                name="asking_for_help"
                id=""
                className="form-control-sm"
              >
                <option value="YES">YES</option>
                <option value="NOE">NO</option>
              </select>
            </div>
            <h5 className="mt-5 mb-3 fw-bold">ANY OTHER DETAILS</h5>
            <textarea
              rows="10"
              cols="60"
              onChange={(e) => setOtherMentalHealthDetails(e.target.value)}
              placeholder="Type here..."
              className="form-control"
              resize={false}
              name="other_mental_concerns_details"
              id=""
            ></textarea>
          </form>
        ) : null}

        <form id="division-36" className="d-flex mt-5 flex-column flex-wrap">
          <h3 className="mt-2 fw-bold mb-3">Wound Assessment</h3>
          <ul>
            <li>
              <a
                onClick={(e) => {
                  setAnyWound(true);
                }}
                href="#division-36-a"
              >
                <div className="option">
                  <input
                    type="radio"
                    checked={anyWound == true}
                    name=""
                    id="Yes-to-wound"
                  />
                  <label htmlFor="Yes-to-wound">Yes</label>
                </div>
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  setAnyWound(false);
                }}
                href="#"
              >
                <div className="option">
                  <input
                    type="radio"
                    checked={anyWound == false}
                    name=""
                    id="no-to-wound"
                  />
                  <label htmlFor="no-to-wound">No</label>
                </div>
              </a>
            </li>
          </ul>
          {anyWound == true ? (
            <>
              <div
                className="mt-5 d-flex flex-column gap-2 align-items-start justify-content-start"
                id="division-36-a"
              >
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Location of Wound
                  </label>
                  <input
                    type="text"
                    value={locationOfWound}
                    onChange={(e) => setLocationOfWound(e.target.value)}
                    name="location_of_wound"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Type of wound
                  </label>
                  <select
                    onChange={(e) => setTypeOfWound(e.target.value)}
                    name="type_of_wound"
                    id=""
                    className="form-control-sm"
                  >
                    <option value="Pressure Ulcer">Pressure Ulcer</option>
                    <option value="Diabetic Ulcer">Diabetic Ulcer</option>
                    <option value="Traumatic Wound">Traumatic Wound</option>
                    <option value="Laceration">Skin Tear /Laceration</option>
                    <option value="Burn">Burn / Scald</option>
                    <option value="Surgical Wound">Surgical Wound</option>
                    <option value="Fungating Lesion">Surgical Wound</option>
                    <option value="Other Wound">Other Type of Wound</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Age of Wound
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setAgeOfWound(e.target.value)}
                    name="age_of_wound"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Cause of Wound (e.g. pressure, shear, trauma, shoes, etc.)
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setCauseOfWound(e.target.value)}
                    name="cause_of_wound"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 flex-column justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    <h5 className="fw-bold">Wound Measurements</h5>
                  </label>
                  <div className="inputs d-flex flex-column mx-4">
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Length in cm:
                      </label>
                      <input
                        onChange={(e) => setLengthOfWound(e.target.value)}
                        type="text"
                        name="wound_length"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Width in cm:
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setWidthOfWound(e.target.value)}
                        name="wound_width"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Depth in cm:
                      </label>
                      <input
                        onChange={(e) => setDepthOfWound(e.target.value)}
                        type="text"
                        name="wound_depth"
                        className="form-control-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Wound Color
                  </label>
                  <select
                    onChange={(e) => setColorOfWound(e.target.value)}
                    name="wound_color"
                    id=""
                    className="form-control-sm"
                  >
                    <option value="Yellow">Yellow</option>
                    <option value="Black">Black</option>
                    <option value="Green">Green</option>
                    <option value="Red">Red</option>
                    <option value="Pink">Pink</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Surounding Skin
                  </label>
                  <select
                    name="wound_sorounding_skin"
                    onChange={(e) => setSurroundingSkinOfWound(e.target.value)}
                    id=""
                    className="form-control-sm"
                  >
                    <option value="Oedema">Oedema</option>
                    <option value="Erythematic">Erythematic</option>
                    <option value="Macerated">Macerated</option>
                    <option value="Healthy/intact">Healthy/intact</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Wound Exudates
                  </label>
                  <select
                    name="wound_exudates"
                    onChange={(e) => setExudatesOfWound(e.target.value)}
                    id=""
                    className="form-control-sm"
                  >
                    <option value="high">High</option>
                    <option value="moderate">Moderate</option>
                    <option value="low">low</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Describe Exudate
                  </label>
                  <select
                    name="wound_exudate_desc"
                    onChange={(e) =>
                      setDescriptionOfExudateOfWound(e.target.value)
                    }
                    id=""
                    className="form-control-sm"
                  >
                    <option value="serous">Serous</option>
                    <option value="hemoserous">Hemoserous</option>
                    <option value="purulant">Purulent</option>
                    <option value="Other Exudate">Other</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Wound Odor
                  </label>
                  <select
                    name="wound_odor"
                    onChange={(e) => setOdorOfWound(e.target.value)}
                    id=""
                    className="form-control-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Pain
                  </label>
                  <select
                    onChange={(e) => setPainOfWound(e.target.value)}
                    name="wound_pain"
                    id=""
                    className="form-control-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Healing/Closure
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setHealingOfWound(e.target.value)}
                    name="healing_or_closure"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Describe the condition of the Floor
                  </label>
                  <input
                    type="text"
                    onChange={(e) => setConditionOfWound(e.target.value)}
                    name="healing_or_closure"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Any further actions taken (such as swab, dressing and
                    referral to the medical team ...)
                  </label>
                  <input
                    type="text"
                    onChange={(e) =>
                      setOtherTakenActionsOfWound(e.target.value)
                    }
                    name="healing_or_closure"
                    className="form-control-sm"
                  />
                </div>
              </div>
            </>
          ) : null}
        </form>
        <form id="division-36" className="d-flex mt-5 flex-column flex-wrap">
          <h3 className="mt-2 fw-bold mb-3">Point of Care Testing</h3>
          <ul>
            <li>
              <div className="fw-bold">Is venous Blood Gas Done?</div>
            </li>
            <li className="mx-3">
              <a
                onClick={(e) => {
                  setVenousBloodGasDone(true);
                }}
                href="#division-37-a"
              >
                <div className="input d-flex flex-row">
                  <input
                    type="radio"
                    checked={venousBloodGasDone == true}
                    id="venous-gas-yes"
                  />
                  <label htmlFor="venous-gas-yes">Yes</label>
                </div>
              </a>
            </li>
            <li className="mx-3">
              <a onClick={(e) => setVenousBloodGasDone(false)} href="#">
                <div className="input d-flex flex-row">
                  <input
                    type="radio"
                    checked={venousBloodGasDone == false}
                    id="venous-gas-no"
                  />
                  <label htmlFor="venous-gas-no">No</label>
                </div>
              </a>
            </li>
          </ul>
          {venousBloodGasDone == true ? (
            <>
              <div className="mx-5" id="division-37-a">
                <div className="fw-bold mb-3 w-100">
                  Please enter these values:
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    pH
                  </label>
                  <input
                    onChange={(e) => setPh(e.target.value)}
                    type="text"
                    name="pH"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    PaCO2
                  </label>
                  <input
                    onChange={(e) => setpaco(e.target.value)}
                    type="text"
                    name="PaCO"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    PaO2
                  </label>
                  <input
                    onChange={(e) => setpao(e.target.value)}
                    type="text"
                    name="PaO"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    HCO3-
                  </label>
                  <input
                    onChange={(e) => sethco(e.target.value)}
                    type="text"
                    name="HCO3"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Base Excess
                  </label>
                  <input
                    onChange={(e) => setBaseExcess(e.target.value)}
                    type="text"
                    name="base_excess"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Hb
                  </label>
                  <input
                    onChange={(e) => setHb(e.target.value)}
                    type="text"
                    name="Hb"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Blood Glucose
                  </label>
                  <input
                    onChange={(e) => setBloodGlucose(e.target.value)}
                    type="text"
                    name="blod_glucose"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Lactate Level
                  </label>
                  <input
                    onChange={(e) => setLactateLevel(e.target.value)}
                    type="text"
                    name="lactate_level"
                    className="form-control-sm"
                  />
                </div>
                <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                  <label htmlFor="" className="fw-bold">
                    Is Urine text has been done ?
                  </label>
                  <div className="options mx-3 d-flex flex-column gap-2">
                    <div className="input d-flex flex-row gap-1">
                      <input
                        value={urineTestDone}
                        onClick={(e) => setUrineTestDone(true)}
                        type="radio"
                        checked={urineTestDone == true}
                        id="urine-test-yes"
                      />
                      <label htmlFor="urine-test-yes">Yes</label>
                    </div>
                    <div className="input d-flex flex-row gap-1">
                      <input
                        value={urineTestDone}
                        onClick={(e) => setUrineTestDone(false)}
                        type="radio"
                        checked={urineTestDone == false}
                        id="urine-test-no"
                      />
                      <label htmlFor="urine-test-no">No</label>
                    </div>
                  </div>
                </div>
              </div>
              {urineTestDone ? (
                <>
                  <div
                    className="mx-5 d-flex flex-column gap-3"
                    id="division-37-a"
                  >
                    <h5 className="fw-bold mb-2 mt-3">
                      Please enter the following value:
                    </h5>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        pH
                      </label>
                      <input
                        onChange={(e) => setUrinePh(e.target.value)}
                        type="text"
                        name="urine_test_ph"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Blood
                      </label>
                      <input
                        onChange={(e) => setUrineBlood(e.target.value)}
                        type="text"
                        name="urine_test_blood"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Protien
                      </label>
                      <input
                        onChange={(e) => setUrineProtien(e.target.value)}
                        type="text"
                        name="urine_test_protien"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Glucose
                      </label>
                      <input
                        onChange={(e) => setUrineGlucose(e.target.value)}
                        type="text"
                        name="urine_test_glucose"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Ketone
                      </label>
                      <input
                        onChange={(e) => setUrineKetone(e.target.value)}
                        type="text"
                        name="urine_test_ketose"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Specific Gravity
                      </label>
                      <input
                        onChange={(e) => setUrineSpecific(e.target.value)}
                        type="text"
                        name="urine_test_specific_gravity"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Nitrite
                      </label>
                      <input
                        onChange={(e) => setUrineNitrite(e.target.value)}
                        type="text"
                        name="urine_test_nitrite"
                        className="form-control-sm"
                      />
                    </div>
                    <div className="option d-flex flex-wrap mb-2 flex-row gap-2 align-items-center justify-content-start">
                      <label htmlFor="" className="fw-bold">
                        Leukocytes
                      </label>
                      <input
                        onChange={(e) => setUrineLuekocytes(e.target.value)}
                        type="text"
                        name="urine_test_leukocytes"
                        className="form-control-sm"
                      />
                    </div>
                  </div>
                </>
              ) : null}
            </>
          ) : null}
        </form>
        <div className="mt-5 mb-5" id="division-38">
          <h4 className="fw-bold">
            Please tick the symptoms associated with this presentation:
          </h4>
          <div className="option">
            <input
              onChange={handleMentalSymptomsCheckboxChange}
              type="checkbox"
              value="Total Loss of consciousness (TLOC) "
              id="Total Loss of consciousness (TLOC)"
            />
            <label htmlFor="Total Loss of consciousness (TLOC)">
              Total Loss of consciousness (TLOC)
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any recent travel"
              id="Any recent travel"
            />
            <label htmlFor="Any recent travel">Any recent travel</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any Vomiting"
              id="Any Vomiting"
            />
            <label htmlFor="Any Vomiting">Any Vomiting</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Anyone in the house have same symptoms"
              id="Anyone in the house have same symptoms"
            />
            <label htmlFor="Anyone in the house have same symptoms">
              Anyone in the house have same symptoms
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any Urine abnormal symptoms"
              id="Any Urine abnormal symptoms"
            />
            <label htmlFor="Any Urine abnormal symptoms">
              Any Urine abnormal symptoms
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any alcohol "
              id="Any alcohol "
            />
            <label htmlFor="Any alcohol ">Any alcohol</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any recreational drugs "
              id="Any recreational drugs "
            />
            <label htmlFor="Any recreational drugs ">
              Any recreational drugs
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any loss of weight recently  "
              id="Any loss of weight recently "
            />
            <label htmlFor="Any loss of weight recently ">
              Any loss of weight recently
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any Bone deformities during assessment "
              id="Any Bone deformities during assessment "
            />
            <label htmlFor="Any Bone deformities during assessment ">
              Any Bone deformities during assessment
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any long lie"
              id="Any long lie "
            />
            <label htmlFor="Any long lie">Any long lie</label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any recent long flight"
              id="Any recent long flight"
            />
            <label htmlFor="Any recent long flight">
              Any recent long flight
            </label>
          </div>
          <div className="option">
            <input
              type="checkbox"
              onChange={handleMentalSymptomsCheckboxChange}
              value="Any photophobia?"
              id="Any photophobia?"
            />
            <label htmlFor="Any photophobia?">Any photophobia?</label>
          </div>
        </div>
        <form id="division-39">
          <h3 className="fw-bold">Injury Assessment</h3>
          <div className="fw-bold mt-3 mb-3">
            Is the patient have any injury/trauma during presentation:
          </div>
          <div className="options d-flex mx-5 flex-column gap-2">
            <div className="input d-flex gap-2">
              <input
                checked={patientHasTrauma == true}
                onClick={(e) => setPatientHasTrauma(true)}
                type="radio"
                id="yes-to-trauma"
              />
              <label htmlFor="yes-to-trauma">Yes</label>
            </div>
            <div className="input d-flex gap-2">
              <input
                checked={patientHasTrauma == false}
                onClick={(e) => setPatientHasTrauma(false)}
                type="radio"
                id="no-to-trauma"
              />
              <label htmlFor="no-to-trauma">No</label>
            </div>
          </div>
          {patientHasTrauma == true ? (
            <>
              <div className="d-flex flex-column mx-5">
                <div className="input d-flex flex-row gap-2">
                  <div className="fw-bold">Location of the injury</div>
                  <input
                    type="text"
                    onChange={(e) => setInjuryLocation(e.target.value)}
                    className="form-control-sm"
                    name="injury_location"
                  />
                </div>
                <div className="input d-flex flex-row gap-2">
                  <div className="fw-bold">Any reduce range of movement</div>
                  <select
                    name="reduced_movement"
                    onChange={(e) => setAnyReducedMovement(e.target.value)}
                    className="form-control-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="input d-flex flex-row gap-2">
                  <div className="fw-bold">
                    If yes please specify (e.g. extension, flexion etc){" "}
                  </div>
                  <input
                    onChange={(e) => setDecreasedSensationDesc(e.target.value)}
                    type="text"
                    className="form-control-sm"
                    name="reduced_sensation_description"
                  />
                </div>
                <div className="input d-flex flex-row gap-2">
                  <div className="fw-bold">Any decrease of sensation</div>
                  <select
                    onChange={(e) => setAnyDecreasedSensation(e.target.value)}
                    name="decreased_sensation"
                    className="form-control-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div className="input d-flex flex-row gap-2">
                  <div className="fw-bold">
                    Is there any Paresthesia (loss of sensation or tingling){" "}
                  </div>
                  <select
                    onChange={(e) => setParesthesia(e.target.value)}
                    name="paresthesia"
                    className="form-control-sm"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="fw-bold mt-3">
                  If the injury in the lower limbs
                </div>
                <div className="mx-5 d-flex flex-column">
                  <div className="input d-flex flex-row gap-2">
                    <div className="fw-bold">
                      Does the patient able to bear weight on the affected limb{" "}
                    </div>
                    <select
                      onChange={(e) => setBearWeightOnLimb(e.target.value)}
                      name="bear_weight_on_limb"
                      className="form-control-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input d-flex flex-row gap-2">
                    <div className="fw-bold">Is there any pedal pulse?</div>
                    <select
                      onChange={(e) => setPedalPulse(e.target.value)}
                      name="pedal_pulse"
                      className="form-control-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="input d-flex flex-row gap-2">
                    <div className="fw-bold">
                      Is the patient able to move toes?
                    </div>
                    <select
                      onChange={(e) => setAbleToMoveToes(e.target.value)}
                      name="able_to_move_toes"
                      className="form-control-sm"
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </form>
        <form id="division-40">
          <h3 className="fw-bold-mt-5 mb-4">Valuable Properties</h3>
          <div className="d-flex flex-row gap-2 mt-4 mb-3 mx-5">
            <div className="fw-bold">
              Please list the valuable patient belongings:
            </div>
            <input
              onChange={(e) => setValuableProperties(e.target.value)}
              type="text"
              name="patient_belongings"
              className="form-control-sm"
            />
          </div>
        </form>

        <form onSubmit={(e) => e.preventDefault()} id="division-40">
          <h3 className="fw-bold-mt-5 mb-4">
            Any Medications Prior to Coming?
          </h3>
          <div className="mt-3 mb-3 d-flex flex-wrap flex-row gap-3">
            <div className="medications d-flex flex-wrap flex-row gap-2 align-items-center justify-content-start">
              {PriorToComingMedications.map((med) => {
                return (
                  <div className="medication">
                    <span>{med.d1}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 mb-3">
            <button
              onClick={(e) => {
                setOptionsModalShowing(true);
                setAddPriorToComingMedicationsFormShowing(true);
              }}
              className="my-primary-btn"
            >
              Add Medications <FontAwesomeIcon icon={faAdd} />
            </button>
          </div>
        </form>

        <div id="division-42" className="section mt-5 mb-5">
          <h2 className="section__title">Recommendation</h2>
          <h3 className="mx-5 mt-3 fw-bold mb-3">
            Completed Nursing / Medical Intervention{" "}
          </h3>
          <div className="d-flex flex-column gap-3 mx-5">
            <input
              placeholder="Start Typing..."
              type="text"
              className="form-control w-50"
              value={medicalInterventionSearchInput}
              onChange={handleInterventionsSearchInput}
            />
            <div className="values">
              {medicalInterventionsSelectedOptions.map((opt, index) => (
                <div key={index} className="value border-1 border border-info">
                  {opt}
                  <span
                    className="close"
                    onClick={() => handleMedicalInterventionsRemoveOption(opt)}
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
            <div className="available-options w-100 p-4 d-flex gap-3 flex-wrap flex-row mt-3 w-50">
              {matchedMedicalInterventionsOptions.map((opt, index) => (
                <div
                  key={index}
                  className="matched-option"
                  onClick={() => handleMedicalInterventionClick(opt)}
                >
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="division-43" className="section mt-5 mb-5">
          <h3 className="mx-5 mt-3 fw-bold mb-3">
            Impression / Nursing Diagnosis (current visit){" "}
          </h3>
          <div className="d-flex flex-column gap-3 mx-5">
            <input
              placeholder="Start Typing..."
              type="text"
              className="form-control w-50"
              onChange={(e) => setImpressionSearchInput(e.target.value)}
              value={impressionSearchInput}
              onKeyDown={handleKeyDown}
            />
            <div className="values">
              {nursingImpressions.map((opt, index) => (
                <div key={index} className="value border-1 border border-info">
                  {opt}
                  <span className="close" onClick={e => handleRemoveImpression(opt)}>
                    x
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="division-43" className="section mt-5 mb-5">
          <h3 className="mx-5 mt-3 fw-bold mb-3">
            Upcoming Plans{" "}
          </h3>
          <div className="d-flex flex-column gap-3 mx-5">
            <input
              placeholder="Start Typing..."
              type="text"
              className="form-control w-50"
              onChange={(e) => setUpcomingPlanSearchInput(e.target.value)}
              value={UpcomingPlanSearchInput}
              onKeyDown={handleUpPlanKeyDown}
            />
            <div className="values">
              {UpcomingPlans.map((opt, index) => (
                <div key={index} className="value border-1 border border-info">
                  {opt}
                  <span className="close" onClick={e => handleRemoveUpPlan(opt)}>
                    x
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="division-43" className="section mt-5 mb-5">
          <div className="d-flex flex-row justify-content-around row-cols-3 flex-wrap gap-1 flex-wrap">
            <ul className="d-flex flex-column gap-1">
              <li>
                <div className="fw-bold mb-3">
                  Has the patient been seen by a doctor?{" "}
                </div>
              </li>
              <li>
                <div
                  onClick={(e) =>
                    setSeenByDoctorStatus("Awaiting to be seen by ED")
                  }
                  className="option d-flex gap-1 align-items-"
                >
                  <input
                    type="radio"
                    checked={seenByDoctorStatus == "Awaiting to be seen by ED"}
                    id="Awaiting to be seen by ED"
                  />
                  <label htmlFor="Awaiting to be seen by ED">
                    Awaiting to be seen by ED
                  </label>
                </div>
              </li>
              <li>
                <div
                  onClick={(e) =>
                    setSeenByDoctorStatus("Seen by ED doctor(Not Referred)")
                  }
                  className="option d-flex gap-1 align-items-"
                >
                  <input
                    type="radio"
                    checked={
                      seenByDoctorStatus == "Seen by ED doctor(Not Referred)"
                    }
                    id="Seen by ED doctor(Not Referred)"
                  />
                  <label htmlFor="Seen by ED doctor(Not Referred)">
                    Seen by ED doctor(Not Referred)
                  </label>
                </div>
              </li>
              <li>
                <div
                  onClick={(e) =>
                    setSeenByDoctorStatus("Referred to specialist")
                  }
                  className="option d-flex gap-1 align-items-"
                >
                  <input
                    type="radio"
                    checked={seenByDoctorStatus == "Referred to specialist"}
                    id="Referred to specialist"
                  />
                  <label htmlFor="Referred to specialist">
                    Referred to specialist
                  </label>
                </div>
              </li>
              <li>
                <div
                  onClick={(e) => setSeenByDoctorStatus("Seen by specialist")}
                  className="option d-flex gap-1 align-items-"
                >
                  <input
                    type="radio"
                    checked={seenByDoctorStatus == "Seen by specialist"}
                    id="Seen by specialist"
                  />
                  <label htmlFor="Seen by specialist">Seen by specialist</label>
                </div>
              </li>
              <li>
                <div
                  onClick={(e) => setSeenByDoctorStatus("Other doctor status")}
                  className="option d-flex gap-1 align-items-"
                >
                  <input
                    type="radio"
                    checked={seenByDoctorStatus == "Other doctor status"}
                    id="Other doctor status"
                  />
                  <label htmlFor="Other doctor status">Other</label>
                </div>
              </li>
            </ul>
            <div className="d-flex flex-row row-cols-3 flex-wrap gap-2 justify-content-start">
              <div className="w-100 d-flex flex-row">
                <div className="fw-bold mb-3">Doctor's Speciality</div>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Acute Medicine"
                  value="Acute Medicine"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Acute Medicine">Acute Medicine</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Cardiology"
                  value="Cardiology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Cardiology">Cardiology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Dermatology"
                  value="Dermatology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Dermatology">Dermatology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="ENT"
                  value="ENT"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="ENT">ENT</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Emergency Department"
                  value="Emergency Department"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Emergency Department">
                  Emergency Department
                </label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Gastrology"
                  value="Gastrology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Gastrology">Gastrology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Gynocology"
                  value="Gynocology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Gynocology">Gynocology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Heamatology"
                  value="Heamatology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Heamatology">Heamatology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Haemophilia"
                  value="Haemophilia"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Haemophilia">Haemophilia</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="HPB Surgery"
                  value="HPB Surgery"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="HPB Surgery">HPB Surgery</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Hepatology"
                  value="Hepatology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Hepatology">Hepatology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Infectious Disease"
                  value="Infectious Disease"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Infectious Disease">Infectious Disease</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="ITU"
                  value="ITU"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="ITU">ITU</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Neurology"
                  value="Neurology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Neurology">Neurology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Obstetric"
                  value="Obstetric"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Obstetric">Obstetric</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Oncology"
                  value="Oncology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Oncology">Oncology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Ophtalmology"
                  value="Ophtalmology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Ophtalmology">Ophtalmology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Orthopedics"
                  value="Orthopedics"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Orthopedics">Orthopedics</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Plastic"
                  value="Plastic"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Plastic">Plastic</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="PARRT"
                  value="PARRT"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="PARRT">PARRT</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Podiatry"
                  value="Podiatry"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Podiatry">Podiatry</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Psychiatry"
                  value="Psychiatry"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Psychiatry">Psychiatry</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Renal"
                  value="Renal"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Renal">Renal</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Respiratory"
                  value="Respiratory"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Respiratory">Respiratory</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Rheumatology"
                  value="Rheumatology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Rheumatology">Rheumatology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Surgical"
                  value="Surgical"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Surgical">Surgical</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="TREAT"
                  value="TREAT"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="TREAT">TREAT</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Uronology"
                  value="Uronology"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Uronology">Uronology</label>
              </div>
              <div className="col d-flex gap-1">
                <input
                  type="checkbox"
                  name=""
                  id="Vascular"
                  value="Vascular"
                  onChange={handleDoctorSpecialityChange}
                />
                <label htmlFor="Vascular">Vascular</label>
              </div>
            </div>
          </div>
        </div>
        <div id="division-44" className="section d-flex flex-column gap-3 row mt-5 mb-5">
          <div className="d-flex flex-column w-50">
            <input type="text" placeholder="Name" onChange={e => setName(e.target.value)}  className="form-control" />
          </div>
          <div className="d-flex flex-column w-50">
            <input type="text" placeholder="Area" onChange={e => setArea(e.target.value)} className="form-control" />
          </div>
          <div className="d-flex flex-column w-50">
            <input type="text" placeholder="Date of Completing Note" onChange={e => setDateofCompletingNote(e.target.value)} className="form-control" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: "10rem" }} ref={divRef}  className="container">
        <div className="row">
          <h1 style={{color:'#3CAAF7', fontStyle:'italic'}} className="">Situation</h1>
        </div>
        <div className="row">
          {modeOfArrival == "Transferred from other Hospital via ambulance" ? (
            <>
              <h5>
                {age} year old {sex} patient brought in by ambulance transferred
                from {transferFromHosp}
              </h5>
            </>
          ) : modeOfArrival == "Referred from other Hospital" ? (
            <h5>
              {age} years old {sex} patient, referred from {transferFromHosp}
            </h5>
          ) : modeOfArrival == "Other-arrival" ? (
            <>
              <h5>
                {age} years old {sex} patient{" "}
              </h5>
            </>
          ) : modeOfArrival == "Referred from Different department" ? (
            <h5>
              {age} years old {sex} patient, referred from {referingDepartment}
            </h5>
          ) : (
            <h5>
              {age} years old patient {modeOfArrival} to our department{" "}
              {modeOfArrival}
            </h5>
          )}
        </div>
        <h5>Mode of Arrival: {modeOfArrival}</h5>
        <div className="row mb-5 mt-5">
          <h1 style={{color:'#3CAAF7', fontStyle:'italic'}}>Background</h1>
        </div>
        <div className="row mb-5">
          {pregnencyStatus == "Currently Pregnant" ? (
            <>
              <h5>Pregnant from Date: {dateFromOnset} </h5>
              <h5 className="mt-4">
                Number of Previous Pregnancies: {prevPregnancies}
              </h5>
              <h5 className="mt-4">
                Number of Miscarriages: {numberOfMisCarriages}
              </h5>
              {numberOfMisCarriages == 0 ? (
                <h5>
                  Patient is Primgravida, pregnant from date {dateFromOnset}
                </h5>
              ) : numberOfMisCarriages > 0 ? (
                <h5>
                  Patient is Gravida({numberOfMisCarriages - 1}) Para(
                  {prevPregnancies - numberOfMisCarriages}), pregnant from date{" "}
                  {dateFromOnset}
                </h5>
              ) : null}
            </>
          ) : pregnencyStatus == "Unknown Pregnancy Status" ? (
            <>
              <h5>Last Menstration Period: {lastMenstruationPeriod}</h5>
              <h5 className="mt-3">
                Number of previous pregnancies: {prevPregnancies}
              </h5>
              <h5 className="mt-3">
                Number of miscarriages: {numberOfMisCarriages}
              </h5>

              <h5 className="mt-5">
                Patient is unsure about pregnancy status. LMP(
                {lastMenstruationPeriod}), with {prevPregnancies} previous
                pregnancies and {numberOfMisCarriages} previous miscarriages.
              </h5>
            </>
          ) : pregnencyStatus == "Not Pregnant" ? (
            <h5>Patient declines pregnancy.</h5>
          ) : null}
        </div>
        <div className="row">
          <h1>Brief history of the current presentation:</h1>
        </div>
        <div className="row">
          <div className="h3 mt-3 mb-4">Reason of current presentation:</div>
          {preferedMethod == "Selecting From the List" ? (
            <>
              <ul>
                {checkedProblems.map((prob) => {
                  return <li>{prob}</li>;
                })}
              </ul>
            </>
          ) : (
            <h5> {reasonOfCurrentVisit}</h5>
          )}

          <div className="h3 mt-3 mb-4">Past Medical History:</div>
          <ul>
            {pastMedicalHistorySelectedOptions.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <h1 style={{color:'#3CAAF7', fontStyle:'italic'}} className="mt-5 mb-5">Assessment</h1>
        {
          patientAppearnaceNormal == '2' ? 
          
        <div className="row">
          <h3 className="mb-3 mt-3">Alert State</h3>
          {patientAppearnaceNormal == "1" ? (
            patientAwake == true ? (
              <> Patient is alert with normal appearance.</>
            ) : null
          ) : patientAwake == "sleeping" &&
            patientisArousableByVoice === true ? (
            <h5>
              Patient is not opening eyes spontaneously but arousable, with
              normal appearance.
            </h5>
          ) : null}
          {patientAppearnaceNormal === "2" ? (
            patientAwake == true ? (
              <h2>Alert</h2>
            ) : null
          ) : patientAwake == "sleeping" &&
            patientisArousableByVoice == true ? (
            <h3>Patient is not opening eyes spontaneously but arousable.</h3>
          ) : null}
          <h3 className="mb-3 mt-3">Behavioural State</h3>
          <ul>
            {form17Options.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
          <h3 className="mb-3 mt-3">Clothing and Parapharnalia</h3>
          <ul>
            {clothingAndPharnalia.map((opt) => {
              return <li>{opt}</li>;
              })}
          </ul>
          <h3 className="mb-3 mt-3">Facies And Expressions</h3>
          <ul>
            {faciesAndExpressions.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
          <h3 className="mb-3 mt-3">Odors of Breath and Body</h3>

          <ul>
            {odorsOfBreathAndBody.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
          <h3 className="mb-3 mt-3">Posture and decubitus</h3>
          <ul>
            {postureAndDecubitus.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
            : null}
        <div className="row mb-5 mt-5">
          <h1>Allergy</h1>
        </div>
        <div className="row">
          <ul>
            {patientHasAllergy == true ? (
              medicationsSelectedOptions.map((opt) => {
                return <li>{opt}</li>;
              })
            ) : patientHasAllergy == false ? (
              <h5>Unknow drug allergy</h5>
            ) : patientHasAllergy === "false" ? (
              <h5>Unable to obtain allergy status from the patient.</h5>
            ) : null}
          </ul>
        </div>
        <div className="row mb-5 mt-5">
          <h1 style={{fontStyle:'italic', textDecoration:'underline'}} >Airway</h1>
        </div>
        <div className="row">
          {airwayAssessmentRequired == "patent" ? (
            <h5>Airway Patent</h5>
          ) : airwayAssessmentRequired == "partial airway" ? (
            <h5>Partial Airway Obstruction </h5>
          ) : airwayAssessmentRequired === "Complete Airway" ? (
            <h5>Complete Airway Obstruction</h5>
          ) : null}

          <h4 className="mt-3 mb-3">Interventions Performed</h4>
          <ul>
            {interventions.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-5 mt-5">
          <h2 style={{fontStyle:'italic', textDecoration:'underline'}} className="mb-3">Breathing</h2>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Signs of Respiratory Distress</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {respiratoryDistresses.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Abnormal Respiratory Sound</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {respiratoryNoises.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Percussions</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {percussions.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Palpations</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {palpations.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Air Entry</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {airEntries.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Cough</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {cough.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-5 mt-5">
          <h2 style={{fontStyle:'italic', textDecoration:'underline'}}>Circulation</h2>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Abdomen</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {abdomenCirculations.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Bleeding</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {sourceOfBleeding.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-3 mt-3">
          <h3 className="mb-3">Urine Output</h3>
        </div>
        <div className="row mb-3">
          <ul>
            {urineOutPut.map((opt) => {
              return <li>{opt}</li>;
            })}
          </ul>
        </div>
        <div className="row mb-5">
          <h2 style={{fontStyle:'italic', textDecoration:'underline'}} >Disability</h2>
        </div>
        <div className="row mb-3">
          <h3>GCS Level</h3>
        </div>
        <div className="row fw-bold">
          {E == "Not Testable E" ||
          V == "Not Testable V" ||
          M == "Not Testable M" ? null : (
            <h5>
              {E + V + M}/15 (E ({E})) V({V}) M({M})
            </h5>
          )}
        </div>
        <div className="row mt-5 mb-3">
          <h3>AVPU Score</h3>
        </div>
        <div className="row">
          <h5>Blood Glucose: {bloodGlucose}</h5>
        </div>
        <div className="row mb-3 mt-3">
          <h4>Pupils Assessment</h4>
        </div>
        <div className="row">
          <h5 className="mb-3">Right Pupil</h5>
          <ul className="mt-3 mb-3">
            <ul>
              <li>
                <h5>Shape : {rightPupil}</h5>
              </li>
              <li>
                <h5>Size : {rightPupilSize}</h5>
              </li>
              <li>
                <h5>Responsiveness to light : {rightPupilResponsiveness}</h5>
              </li>
            </ul>
          </ul>
        </div>
        <div className="row">
          <h5 className="mb-3">Left Pupil</h5>
          <ul className="mt-3 mb-3">
            <ul>
              <li>
                <h5>Shape : {leftPupil}</h5>
              </li>
              <li>
                <h5>Size : {leftPupilSize}</h5>
              </li>
              <li>
                <h5>Responsiveness to light : {leftPupilResponsiveness}</h5>
              </li>
            </ul>
          </ul>
        </div>
        <div className="row mt-4 mb-4">
          <h2>Limb Assesment</h2>
          <ul>
            <li>
              <h5>Right Arm Movement: {rightArmMovement}</h5>
            </li>
            <li>
              <h5>Left Arm Movement: {leftArmMovement}</h5>
            </li>
            <li>
              <h5>Right Leg Movement: {rightLegMovement}</h5>
            </li>
            <li>
              <h5>Left Leg Movement: {leftLegMovement}</h5>
            </li>
          </ul>
        </div>
        <div className="row mb-4 mt-4">
          <h2 style={{fontStyle:'italic', textDecoration:'underline'}}>Exposure</h2>
        </div>
        <div className="row">
          <h5>
            Temperature: <div className="fw-bold">{temperature}</div>
          </h5>
        </div>
        <div className="row mb-4 mt-4">
          <h2>Pressure Sores</h2>
        </div>
        <div className="row d-flex flex-row gap-3  justify-content-center row-cols-3 flex-wrap mb-3">
          {skinIntact == true
            ? sores.map((opt) => {
                return (
                  <div className="d-flex pressure-sore-result flex-column col gap-3">
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Affected body area: </h6> <h5>{opt.d1}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Size of Pressure Sore: </h6> <h5>{opt.d2}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Insertion Site: </h6> <h5>{opt.d3}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Grade of Pressure Sore: </h6> <h5>{opt.d4}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Further Description of Pressure Sore: </h6>{" "}
                      <h5>{opt.d5}</h5>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        <div className="row">
          {pressureSoreWasReported ? (
            <h5 className="mt-5 mb-5">
              Pressure Sore reported with reference number {datixNumber}
            </h5>
          ) : (
            <h5>Pressure Sore was not reported</h5>
          )}
        </div>
        <div className="row mt-5 mb-4">
          <h2>Wound Assesment</h2>
        </div>
        {anyWound == false ? (
          <div className="row mb-3">
            <h5>No wound has been observed during assessment</h5>
          </div>
        ) : null}
        {anyWound ? (
          <div className="row mt-3 mb-3">
            <div className="d-flex flex-row gap-3">
              <h6>Location of Wound</h6>
              <h5>{locationOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Type of Wound</h6>
              <h5>{typeOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Surrounding Skin of Wound</h6>
              <h5>{SurroundingSkinOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Pain of Wound</h6>
              <h5>{PainOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Color of Wound</h6>
              <h5>{ColorOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Odor of Wound</h6>
              <h5>{OdorOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Cause of Wound</h6>
              <h5>{CauseOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Length of Wound</h6>
              <h5>{LengthOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Depth of Wound</h6>
              <h5>{DepthOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Width of Wound</h6>
              <h5>{WidthOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Exudates of Wound</h6>
              <h5>{ExudatesOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Description of Exudates of Wound</h6>
              <h5>{DescriptionOfExudateOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Healing/Closure of Wound</h6>
              <h5>{healingOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Healing/Closure of Floor</h6>
              <h5>{conditionOfWound}</h5>
            </div>
            <div className="d-flex flex-row gap-3">
              <h6>Actions taken </h6>
              <h5>{otherTakenActionsOfWound}</h5>
            </div>
          </div>
        ) : null}
        <div className="row mb-4 mt-4">
          <h1>POCT</h1>
        </div>
        {venousBloodGasDone == false ? (
          <div className="row mb-4">
            <h5>No blood gas has been done</h5>
          </div>
        ) : null}
        {venousBloodGasDone == true ? (
          <>
            <div className="row d-flex flex-column mb-4 mt-4">
              <div className="col d-flex flex-row gap-3">
                <h5>pH</h5>
                <h6>{Ph}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>PaCO2</h5>
                <h6>{paco}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>PaO2</h5>
                <h6>{pao}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>HCO3-</h5>
                <h6>{hco}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Base Excess</h5>
                <h6>{baseExcess}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Hb</h5>
                <h6>{hb}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Blood Glucose</h5>
                <h6>{bloodGlucose}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Lactate Level</h5>
                <h6>{lactateLevel}</h6>
              </div>
            </div>
          </>
        ) : null}

        {urineTestDone == true ? (
          <>
            <h3 className="mb-3 mt-3">Urine Test Results</h3>
            <div className="row d-flex flex-column mb-4 mt-4">
              <div className="col d-flex flex-row gap-3">
                <h5>pH</h5>
                <h6>{UrinePh}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Urine Blood</h5>
                <h6>{UrineBlood}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Protien</h5>
                <h6>{UrineProtien}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Glucose</h5>
                <h6>{UrineGlucose}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Ketone</h5>
                <h6>{UrineKetone}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Specific Gravity </h5>
                <h6>{UrineSpecific}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Nitrite</h5>
                <h6>{UrineNitrite}</h6>
              </div>
              <div className="col d-flex flex-row gap-3">
                <h5>Leukocytes</h5>
                <h6>{UrineLuekocytes}</h6>
              </div>
            </div>
          </>
        ) : urineTestDone == false ? (
          <>
            <div className="row mb-3 mt-4">
              <h5>No Urine test has been done.</h5>
            </div>
          </>
        ) : null}

        <div className="row mb-5 mt-5">
          <h1>Pain Assessment</h1>
        </div>
        <div className="row d-flex flex-row gap-3  justify-content-center row-cols-3 flex-wrap mb-3">
          {painAssesment == true
            ? addedPains.map((opt) => {
                return (
                  <div className="d-flex pressure-sore-result flex-column col gap-3">
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Located In : </h6> <h5>{opt.d1}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>What makes it better/worse? : </h6> <h5>{opt.d2}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Quality of Pain: </h6> <h5>{opt.d3}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Radiate to other parts?: </h6> <h5>{opt.d4}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Severeness of pain: </h6> <h5>{opt.d6}</h5>
                    </div>
                    <div className="d-flex gap-1 fw-bold flex-column align-items-start">
                      <h6>Started from: </h6> <h5>{opt.d5}</h5>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
        {patientHasTrauma !== true ? (
          <div className="row mt-5 mb-5">
            <h5>No injury reported during this presentation</h5>
          </div>
        ) : null}
        {patientHasTrauma == true ? (
          <div className="row mt-4 mb-4">
            {AnyReducedMovement == "yes" ? (
              <h5 className="mb-3">
                Reduced range of movement {DecreasedSensationDesc}
              </h5>
            ) : (
              <h5>No reduced range of movement.</h5>
            )}
            {AnyDecreasedSensation == "yes" ? (
              <h5 className="mb-3">
                Assessment revealed reduction of sensation
              </h5>
            ) : (
              <h5>No decreased sensation</h5>
            )}

            {AnyDecreasedSensation == "yes" ? (
              <h5 className="mb-3">
                Assessment revealed reduction of sensation
              </h5>
            ) : (
              <h5>No decreased sensation</h5>
            )}

            {Paresthesia == "yes" ? (
              <h5 className="mb-3">Paraesthesia</h5>
            ) : (
              <h5>No Paraesthesia</h5>
            )}

            {BearWeightOnLimb == "yes" ? (
              <h5 className="mb-3">Able to Bear Weight</h5>
            ) : (
              <h5>Unable to bear weight</h5>
            )}

            {PedalPulse == "yes" ? (
              <h5 className="mb-3">Pedal Pulse Present</h5>
            ) : (
              <h5>Absent Pedal Pulse</h5>
            )}

            {AbleToMoveToes == "yes" ? (
              <h5 className="mb-3">Able to ove toes</h5>
            ) : (
              <h5>Unable to move toes</h5>
            )}
          </div>
        ) : null}
        <div className="row mt-5 mb-5">
          <h1>Social History</h1>
        </div>
        {elimination !== "" || elimination !== null ? (
          <>
            <div className="row mb-4 mt-4">
              <h3>Elimination</h3>
            </div>
            <div className="row mb-3">{elimination}</div>
          </>
        ) : null}
        <div className="row mb-4 mt-4">
          <h3>Accomodation</h3>
        </div>
        <div className="row mb-3">{accomodation}</div>

        <div className="row mb-4 mt-4">
          <h3>Lives With</h3>
        </div>
        <div className="row mb-3">{livesWith}</div>

        <div className="row mb-4 mt-4">
          <h3>Mobility</h3>
        </div>
        <div className="row mb-3">{mobility}</div>

        <div className="row mb-4 mt-4">
          <h3>Package of Care</h3>
        </div>
        <div className="row mb-3">{packageOfCare}</div>

        <div className="row mb-4 mt-4">
          <h3>Smoking</h3>
        </div>
        <div className="row mb-3">{smokingHistory}</div>

        <div className="row mb-4 mt-4">
          <h3>Alcohol</h3>
        </div>
        <div className="row mb-3">{drinkingHistory}</div>

        <div className="row mb-4 mt-4">
          <h3>Frailty Score</h3>
        </div>
        <div className="row mb-3">{frailtyScore}</div>
        <div className="row mb-5 mt-5">
          <h3>Lines/Tubes</h3>
        </div>
        <div className="row d-flex flex-column flex-wrap mb-3">
          {lines.map((opt) => {
            return (
              <>
                <h5 className="mb-3">
                  {opt.d1} size {opt.d4} inserted in the {opt.d2} on {opt.d3}: :{" "}
                  {opt.d5 == "Yes" ? <>Patent</> : <>Not Patent</>}
                </h5>
              </>
            );
          })}
        </div>

        <div className="row mb-5 mt-4">
          <h1>Mental Health Assessment</h1>
        </div>
        <div className="row mb-3">
          {mentalHealthConcern == true ? (
            <>
              <h3 className="mb-3">Appearance</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Distinctive Features</div>
                <h5>{distFeatures}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Clothing</div>
                <h5>{Clothing}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Posture/Gait</div>
                <h5>{PostureGait}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Grooming</div>
                <h5>{Grooming}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Obvious Self-harm</div>
                <h5>{obviousSelfHarm}</h5>
              </div>
              <div className="row mb-2 mt-3">
                <h4>Mental Health Medications</h4>
              </div>
              <div className="d-flex flex-row gap-3 flex-row">
                {mentalMedications.map((opt) => {
                  return (
                    <div
                      style={{ padding: "1rem", borderRadius: "8px" }}
                      className="p2 d-flex flex-column gap-2 border"
                    >
                      <div className="d-flex align-items-center flex-row gap-2">
                        <div className="fw-bold">Medication</div>
                        <h5>{opt.d1}</h5>
                      </div>
                      <div className="d-flex align-items-center flex-row gap-2">
                        <div className="fw-bold">Time</div>
                        <h5>{opt.d2}</h5>
                      </div>
                      <div className="d-flex align-items-center flex-row gap-2">
                        <div className="fw-bold">Dose</div>
                        <h5>{opt.d3}</h5>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className="mb-3">Behaviour</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Eye Contact</div>
                <h5>{eyeContact}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Facial Expression</div>
                <h5>{FacialExpression}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Psychomotor Activity</div>
                <h5>{PsychomotorActivity}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Body Language/Gestures/Manners</div>
                <h5>{BodyLanguage}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Level of Arousal</div>
                <h5>{LevelOfArousal}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Ability to Follow Requests</div>
                <h5>{AbilityToFollowRequest}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Rapport/Engagement</div>
                <h5>{Rapport}</h5>
              </div>
              <h3 className="mb-3 mt-3">Speech</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Rate</div>
                <h5>{Rate}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Quantity</div>
                <h5>{Quantity}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Tone</div>
                <h5>{Tone}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Volume</div>
                <h5>{Volume}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Fluency and Rhythm</div>
                <h5>{Tone}</h5>
              </div>
              <h3 className="mb-3 mt-3">Mood</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Mood State</div>
                <h5>{MoodState}</h5>
              </div>
              <h3 className="mb-3 mt-3">Thought</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Suicidal Thoughts</div>
                <h5>{SuicidalThoughts}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Suicidal Plan in place</div>
                <h5>{SuicidalPlanInPlace}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Suicidal Plan Description</div>
                <h5>{SuicidalPlanDesc}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Any Previous Suicide attempt</div>
                <h5>{PreviousSuidicalAttempt}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Harm-Others Thoughts</div>
                <h5>{HarmOthers}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Homicidal/Violent Thoughts</div>
                <h5>{HomicidalThoughts}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Halucination</div>
                <h5>{Halucination}</h5>
              </div>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Halluicnatin Description</div>
                <h5>{HalucinationDesc}</h5>
              </div>
              <h3 className="mb-3 mt-3">Cognition</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Orientation</div>
                <h5>{Orientation}</h5>
              </div>
              <h3 className="mb-3 mt-3">Insight</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">Patient asking for help?</div>
                <h5>{AskingForHelp}</h5>
              </div>
              <h3 className="mb-3 mt-3">Additional Details</h3>
              <div className="d-flex mb-2 flex-row gap-2">
                <div className="fw-bold">{OtherMentalHealthDetails}</div>
              </div>
            </>
          ) : (
            <h5>No mental health concern during this visit</h5>
          )}
        </div>
        <div className="row mt-4 mb-4">
          <h3>Valuable Properties</h3>
        </div>
        <div className="row mb-3 mt-3">
          <h5>{ValuableProperties}</h5>
        </div>
        <div className="row mt-4 mb-4">
          <h3>Medications Prior to Coming</h3>
        </div>

        <div className="d-flex flex-row gap-3 flex-row">
          {PriorToComingMedications.map((opt) => {
            return (
              <div
                style={{ padding: "1rem", borderRadius: "8px" }}
                className="p2 d-flex flex-column gap-2 border"
              >
                <div className="d-flex align-items-center flex-row gap-2">
                  <div className="fw-bold">Medication</div>
                  <h5>{opt.d1}</h5>
                </div>
                <div className="d-flex align-items-center flex-row gap-2">
                  <div className="fw-bold">Time</div>
                  <h5>{opt.d2}</h5>
                </div>
                <div className="d-flex align-items-center flex-row gap-2">
                  <div className="fw-bold">Dose</div>
                  <h5>{opt.d3}</h5>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row mt-4 mb-4"></div>
        <div className="row mt-4 mb-4">
          <h3>
            Additional relevant details associated with the
            presentation:
          </h3>
        </div>
        <div className="row mx-4 mb-3 mt-3">
          <ul>
            {mentalPresentationSymptoms.map((opt) => {
              return (
                <>
                  <li className="mt-2 fw-bold">{opt}</li>
                </>
              );
            })}
          </ul>
        </div>

        <div className="row mb-5 mt-5">
          <h1 style={{color:'#3CAAF7', fontStyle:'italic'}}>Recommendations</h1>
        </div>

        <h2 className="mb-4">Completed Nursing / Medical Intervention</h2>
        <div className="row mb-3">
          <ul>
            {medicalInterventionsSelectedOptions.map((opt) => {
              return (
                <>
                  <li>{opt}</li>
                </>
              );
            })}
          </ul>
        </div>
        <h2 className="mb-4">Impression / Nursing Diagnosis (current visit)</h2>
        <div className="row mb-3 values d-flex flex-row gap-3 flex-wrap">
              {nursingImpressions.map((opt, index) => (
                <div key={index} className="value border-1 border border-info">
                  {opt}
                  <span className="close" onClick={e => handleRemoveImpression(opt)}>
                    x
                  </span>
                </div>
              ))}
            </div>
        <h2 className="mb-4">Upcoming Plans</h2>
        <div className="row mb-3 values d-flex flex-row gap-3 flex-wrap">
              {UpcomingPlans.map((opt, index) => (
                <div key={index} className="value border-1 border border-info">
                  {opt}
                  <span className="close" onClick={e => handleRemoveImpression(opt)}>
                    x
                  </span>
                </div>
              ))}
            </div>
        <h2 className="mb-4">Doctor's Specialities</h2>
        <div className="row mb-3">
          <ul>
            {doctorSpecailities.map((opt) => {
              return (
                <>
                  <li>{opt}</li>
                </>
              );
            })}
          </ul>
        </div>
        <h2 className="mb-4">Patient's Status</h2>
        <div className="row mb-3">
          <h5>{seenByDoctorStatus}</h5>
        </div>
        <h2>Personal Info</h2>
        <div className="row">

        <div className="d-flex flex-row flex-wrap gap-3">
          <div className="fw-bold">Name</div>
          <h5>{Name}</h5>
        </div>
        <div className="d-flex flex-row flex-wrap gap-3">
          <div className="fw-bold">Area</div>
          <h5>{Area}</h5>
        </div>
        <div className="d-flex flex-row flex-wrap gap-3">
          <div className="fw-bold">Date of Completing Note</div>
          <h5>{DateofCompletingNote}</h5>
        </div>
        </div>
      </div>
      <div className="container m-5">
      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col d-flex flex-row align-items-center justify-content">
          <button onClick={handleDownloadPdf} className="my-primary-btn">Download to Pdf</button>
        </div>
        </div>
      </div>
    </>
  );
}
