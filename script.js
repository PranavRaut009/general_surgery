const questions = [
    
  {
    question: "What is surgical bandaging?",
    answers: [
      { text: "The process of using adhesive tape to close a wound", correct: false },
      { text: "The process of wrapping a surgical site with sterile dressings ", correct: true },
      { text: "The process of applying a cast to a broken bone ", correct: false },
      { text: " The process of suturing a wound ", correct: false },
      { text: "The process of cleaning a surgical site with antiseptic solution ", correct: false },
    ],
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the wrist or hand? ",
    answers: [
      { text: "Hand bandage ", correct: false },
      { text: "Wrist bandage ", correct: true },
      { text: "Finger bandage ", correct: false },
      { text: " Arm bandage", correct: false },
      { text: "Elbow bandage", correct: false },
    ],
  },
  {
    question: "What is the term for the process of applying a dressing to a surgical wound? ",
    answers: [
      { text: "Dressing application ", correct: true },
      { text: "Wound closure ", correct: false },
      { text: "Wound debridement ", correct: false },
      { text: "Wound irrigation ", correct: false },
      { text: "Wound packing ", correct: false },
    ],
  },
  {
    question: "Which of the following is a common type of padding used for surgical bandaging? ",
    answers: [
      { text: " Cotton balls ", correct: false },
      { text: "Foam pads ", correct: false },
      { text: "Sponge pads ", correct: false },
      { text: "Gauze pads", correct: false },
      { text: "All of the above ", correct: true },
    ],
  },
  {
    question: "What is the term for the process of ensuring that a surgical bandage is tight enough to be secure, but not so tight as to restrict blood flow? ",
    answers: [
      { text: "Tensioning ", correct: true },
      { text: "Tightening ", correct: false },
      { text: "Loosening ", correct: false },
      { text: "Adjusting ", correct: false },
      { text: "Securing ", correct: false },
    ],
  },

  {
    question: "Which of the following is a common type of surgical adhesive?",
    answers: [
      { text: "Duct tape ", correct: false },
      { text: "Electrical tape ", correct: false },
      { text: "Medical tape ", correct: true },
      { text: "Masking tape ", correct: false },
      { text: "Packing tape ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of surgical dressing?",
    answers: [
      { text: "Band-Aid ", correct: false },
      { text: "Gauze ", correct: true },
      { text: "Adhesive tape ", correct: false },
      { text: "Elastic bandage ", correct: false },
      { text: "Splint ", correct: false}
    ]
  },
  {
    question: "Which of the following is a common material used for surgical bandages? ",
    answers: [
      { text: " Cotton ", correct: true },
      { text: "Polyester ", correct: false },
      { text: "Nylon ", correct: false},
      { text: "Rayon ", correct: false },
      { text: "Silk ", correct: false }
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the foot or ankle?  ",
    answers: [
      { text: "Foot bandage", correct: false },
      { text: "Ankle bandage ", correct: true},
      { text: "Toe bandage  ", correct: false },
      { text: "Leg bandage ", correct: false },
      { text: " Knee bandage  ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used for surgical wounds? ",
    answers: [
      { text: " Hydrocolloid dressing ", correct: false },
      { text: "Alginate dressing ", correct: false },
      { text: "Foam dressing", correct: false },
      { text: " Transparent film dressing ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the shoulder or upper arm? ",
    answers: [
      { text: "Shoulder bandage ", correct: false },
      { text: "Arm bandage ", correct: false },
      { text: " Elbow bandage ", correct: false },
      { text: "Clavicle bandage ", correct: true },
      { text: "Biceps bandage ", correct: false}
    ]
  },
  {
    question: "What is the term for the type of bandage that is used to hold a dressing in place on the lower leg or calf? ",
    answers: [
      { text: "Calf bandage ", correct: false },
      { text: " Shin bandage ", correct: true},
      { text: "Knee bandage", correct: false },
      { text: " Ankle bandage", correct: false },
      { text: "Achilles bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that may require surgical bandaging? ",
    answers: [
      { text: "Bruise ", correct: false },
      { text: "Burn", correct: false },
      { text: "Abrasion ", correct: false },
      { text: "Laceration ", correct: false },
      { text: "All of the above ", correct: true}
    ]
  },
  {
    question: "What is the term for the process of applying a surgical bandage to a wound? ",
    answers: [
      { text: "Dressing", correct: false },
      { text: "Wrapping ", correct: true },
      { text: "Binding ", correct: false },
      { text: "Securing", correct: false },
      { text: "Taping", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of material used for surgical dressings?",
    answers: [
      { text: "Plastic ", correct: false },
      { text: " Cotton ", correct: true },
      { text: "Leather ", correct: false },
      { text: " Metal ", correct: false },
      { text: " Rubber ", correct:false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the eye? ",
    answers: [
      { text: " Eye patch ", correct: true },
      { text: " Eyelid bandage ", correct: false },
      { text: "Eye cover ", correct: false},
      { text: "Eye wrap ", correct: false },
      { text: " Eye shield", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used for surgical bandaging? ",
    answers: [
      { text: "Hydrogel ", correct: false },
      { text: "Adhesive", correct: false },
      { text: "Antibacterial", correct: false },
      { text: "Non-stick ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is a common type of dressing used in surgical bandaging? ",
    answers: [
      { text: "Cast ", correct: false },
      { text: "Splint ", correct: false },
      { text: " Sterile gauze ", correct: true },
      { text: "Elastic bandage ", correct: false},
      { text: "Adhesive tape ", correct: false }
    ]
  },
  {
    question: "20. What is the name for the type of bandage that is used to hold a dressing in place on the foot or ankle?",
    answers: [
      { text: "Foot bandage ", correct: false },
      { text: "Ankle bandage ", correct: true},
      { text: "Toe bandage ", correct: false },
      { text: "Leg bandage", correct: false },
      { text: "Knee bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that may require a compression bandage? ",
    answers: [
      { text: "Burn ", correct: false },
      { text: " Bruise ", correct: false },
      { text: "Cut ", correct: false },
      { text: "Sprain ", correct: true },
      { text: " Allergic reaction  ", correct: false }
    ]
  },
  {
    question: "What is the purpose of surgical bandaging? ",
    answers: [
      { text: "To prevent infection ", correct: false },
      { text: " To provide support to a surgical site", correct: false },
      { text: "To control bleeding ", correct: false },
      { text: "To promote healing ", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "What is the term for a type of bandage that is used to provide compression to a body part, such as the ankle or wrist? ",
    answers: [
      { text: "Elastic bandage ", correct: true },
      { text: "Figure-eight bandage ", correct: false },
      { text: "Spiral bandage ", correct: false },
      { text: "Circular bandage ", correct: false },
      { text: "Recurrent bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the head or neck?",
    answers: [
      { text: "Head bandage ", correct: true },
      { text: "Neck bandage", correct: false },
      { text: " Ear bandage ", correct: false },
      { text: " Eye bandage ", correct: false },
      { text: "Chin bandage ", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of adhesive used for surgical bandaging? ",
    answers: [
      { text: "Super glue ", correct: false },
      { text: "Hot glue", correct: false },
      { text: "Medical tape n", correct: true },
      { text: "Rubber cement ", correct: false },
      { text: "Contact cement ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing a surgical bandage? ",
    answers: [
      { text: "Unrolling ", correct: false },
      { text: "Unpacking", correct: false },
      { text: " Unwrapping ", correct: true },
      { text: "Unbinding", correct: false },
      { text: "Unveiling ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the chest or abdomen? ",
    answers: [
      { text: "Chest bandages", correct: false },
      { text: "Thoracic bandage", correct: false },
      { text: "Abdominal bandage",correct : true },
      { text: "Gastric bandage ", correct: false },
      { text: " Cardiac bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the thigh or hip? ",
    answers: [
      { text: "Thigh bandage ", correct: true },
      { text: " Hip bandage", correct:false },
      { text: "Knee bandage ", correct: false },
      { text: "THamstring bandage ", correct: false },
      { text: "Quadriceps bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of tape used for surgical bandaging? ",
    answers: [
      { text: "Duct tape ", correct: false },
      { text: " Electrical tape ", correct: false },
      { text: "Masking tape", correct: false },
      { text: "Medical tape ", correct: true },
      { text: "Packing tape ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the forearm or wrist? ",
    answers: [
      { text: "Forearm bandage ", correct: true },
      { text: "Wrist bandage ", correct: false },
      { text: " Hand bandage ", correct: false },
      { text: " Finger bandage ", correct: false },
      { text: " Knee bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the chest or abdomen? ",
    answers: [
      { text: "Chest bandage ", correct: false },
      { text: " Abdominal bandage ", correct: true },
      { text: " Breast bandage", correct: false },
      { text: "Shoulder bandage ", correct: false },
      { text: " Back bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the knee or elbow? ",
    answers: [
      { text: " Knee bandage", correct: true },
      { text: "Elbow bandage ", correct: false },
      { text: " Arm bandage ", correct: false },
      { text: "Leg bandage ", correct: false },
      { text: "Shoulder bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the hand or fingers? ",
    answers: [
      { text: "Hand bandage ", correct: false },
      { text: "Finger bandage ", correct: true },
      { text: "Wrist bandage", correct: false },
      { text: "Arm bandage ", correct: false },
      { text: "Elbow bandage ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the shoulder? ",
    answers: [
      { text: "Shoulder bandage ", correct: true },
      { text: "Arm bandage ", correct: false },
      { text: "Back bandage", correct: false },
      { text: "Neck bandage", correct: false },
      { text: "Chest bandage", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to secure a dressing in place on the chest? ",
    answers: [
      { text: "Chest bandage ", correct: false },
      { text: "H Breast bandage ", correct: false },
      { text: "Torso bandage", correct: false },
      { text: "Abdominal bandage ", correct: true},
      { text: "Shoulder bandage", correct: false }
    ]
  },
  {
    question: "Which of the following is a common type of wound that requires surgical bandaging?",
    answers: [
      { text: "Bruise ", correct: false },
      { text: "Cut ", correct: true },
      { text: "Rash", correct: false },
      { text: "Sunburn ", correct: false },
      { text: "Allergic reaction ", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the elbow or forearm? ",
    answers: [
      { text: "Elbow bandage ", correct: false },
      { text: "Arm bandage ", correct: true },
      { text: "Hand bandage ", correct: false },
      { text: " Wrist bandage ", correct: false },
      { text: "Finger bandage", correct:false }
    ]
  },
  {
    question: "What is the term for the process of applying a surgical bandage? ",
    answers: [
      { text: " Wrapping ", correct: true },
      { text: " Rolling ", correct: false },
      { text: "Packing ", correct: false },
      { text: " Binding ", correct: false },
      { text: "Covering", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the thigh or knee? ",
    answers: [
      { text: "Knee bandage ", correct: true },
      { text: "Leg bandage ", correct: false },
      { text: "Ankle bandage ", correct: false },
      { text: "Foot bandage ", correct: false },
      { text: "Foot bandage ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of reducing the number of microorganisms on a surface or object? ",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: true },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization ", correct: false },
      { text: " Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a critical item in the surgical field? ",
    answers: [
      { text: " The surgical table ", correct: false },
      { text: " Surgical instruments ", correct: true },
      { text: " Surgical drapes ", correct: false },
      { text: "The surgical room's walls ", correct: false},
      { text: "The surgical team's shoes ", correct: false }
    ]
  },
  {
    question: "44. Which of the following is an example of a commonly used disinfectant for cleaning surgical instruments?",
    answers: [
      { text: "Sterilization ", correct: true },
      { text: "Disinfection ", correct: false },
      { text: " Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: " Cleaning ", correct: false }
    ]
  },
  {
    question: "In clinical occupational health practice, why is understanding existing work restrictions or accommodations important?",
    answers: [
      { text: " Bleach ", correct: false },
      { text: "Alcohol ", correct: false },
      { text: " Betadine ", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Glutaraldehyde ", correct: true }
    ]
  },
  {
    question: "45. Which of the following is an example of a type of shoe cover that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Sandals", correct: false },
      { text: "Sneakers ", correct: false },
      { text: " Boots ", correct: false },
      { text: "Disposable shoe covers ",correct: true },
      { text: " All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a method for preventing the development of antimicrobial resistance?",
    answers: [
      { text: "Proper hand hygiene", correct: true },
      { text: "Overuse of antibiotics", correct: false },
      { text: "Use of broad-spectrum antibiotics ", correct: false },
      { text: "Use of antibiotics for viral infections ", correct: false },
      { text: "TNone of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a sterile item that should be used only once and then discarded?",
    answers: [
      { text: "Scalpel blade", correct: true },
      { text: "Forceps", correct: false },
      { text: "Scissors ", correct: false },
      { text: "Needle holder ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of surgical site infection that occurs throughout the body and can be life-threatening? ",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional", correct: false },
      { text: "Organ/space", correct: false },
      { text: "Systemic", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of mask that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Cloth mask", correct: false },
      { text: "N95 respirator ", correct: false },
      { text: "Surgical mask ", correct: true },
      { text: "Gas mask", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can increase the risk of surgical fires? ",
    answers: [
      { text: "Use of alcohol-based skin preparations", correct: false },
      { text: "Use of oxygen-enriched atmospheres", correct: false },
      { text: "Use of laser devices", correct: false },
      { text: "Use of electrocautery devices", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical smoke that can be produced during surgical procedures?",
    answers: [
      { text: "Carbon dioxide", correct: false },
      { text: "Oxygen", correct: false },
      { text: "Nitrogen", correct: false },
      { text: "• Water vapor ", correct: false },
      { text: "None of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of hazard associated with the use of electrosurgical devices? ",
    answers: [
      { text: "Burns", correct: false },
      { text: "Electrocution", correct: false },
      { text: "Explosion", correct: false },
      { text: "Fire", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: " Which of the following is an example of a method for reducing the risk of hazards associated with electrosurgical devices?",
    answers: [
      { text: "Proper grounding and insulation of the device ", correct: false },
      { text: "Use of bipolar cautery instead of monopolar cautery", correct: false },
      { text: "Use of non-flammable skin preparations", correct: false },
      { text: "Use of non-combustible drapes ", correct: false },
      { text: "• All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of hazards associated with laser devices?",
    answers: [
      { text: "Proper training and certification of operators ", correct: false },
      { text: "Use of non-reflective materials in the surgical field", correct: false },
      { text: "Proper use of protective eyewear", correct: false },
      { text: "Use of smoke evacuators", correct: false },
      { text: "All of the above ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a physical method of sterilization?",
    answers: [
      { text: "Autoclaving ", correct: true },
      { text: "Gas sterilization", correct: false },
      { text: " Ethylene oxide sterilization ", correct: false },
      { text: "Cold sterilization", correct: false },
      { text: "Chemical sterilization", correct: false }
    ]
  },
  {
    question: "What is asepsis? ",
    answers: [
      { text: "The study of microorganisms ", correct: false },
      { text: "The process of sterilizing instruments ", correct: false },
      { text: "The absence of microorganisms", correct: true },
      { text: "The use of antibiotics", correct: false },
      { text: "The process of cleaning surgical instruments", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique? ",
    answers: [
      { text: "Cleaning the surgical room with bleach ", correct: false },
      { text: "Wiping down the surgical table with alcohol", correct: false },
      { text: "Using a sterile surgical gown and gloves", correct: true },
      { text: " Wearing regular clothing during surgery ", correct: false},
      { text: " Rinsing surgical instruments in tap water", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a sterile item in the surgical field? ?",
    answers: [
      { text: "Non-sterile surgical gloves", correct: false },
      { text: "Non-sterile gauze ", correct: false },
      { text: "Sterile surgical instruments", correct: true },
      { text: "Non-sterile surgical gown ", correct: false },
      { text: "Non-sterile drapes ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of an antiseptic? ",
    answers: [
      { text: "Alcohol", correct: true },
      { text: "Bleach", correct: false },
      { text: "Soap and water ", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: ". What is the term for the process of killing or eliminating microorganisms on living tissue?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: true },
      { text: "Sanitization", correct: false },
      { text: "Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-sterile field?",
    answers: [
      { text: "The surgical team's clothing", correct: false },
      { text: "TThe surgical team's shoes", correct: false },
      { text: "The surgical table", correct: false },
      { text: "The surgical room's walls ", correct: true },
      { text: "The surgical room's ceiling", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used during surgery?",
    answers: [
      { text: "Wearing non-sterile clothing", correct: false },
      { text: " Using non-sterile surgical instruments ", correct: false },
      { text: "Wiping down the surgical table with tap water", correct: false },
      { text: "Using a sterile surgical gown and gloves ", correct: true },
      { text: "Rinsing surgical instruments with bleach", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-critical item in the surgical field?",
    answers: [
      { text: "Surgical instruments", correct: false },
      { text: "TSurgical drapes", correct: false },
      { text: "The surgical table", correct: false },
      { text: "The surgical room's walls", correct: true },
      { text: "The surgical room's ceiling ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a semi-critical item in the surgical field? ",
    answers: [
      { text: "The surgical table ", correct: false },
      { text: "Surgical instruments ", correct: false },
      { text: "Surgical drapes", correct: true },
      { text: "The surgical room's walls ", correct: false },
      { text: "The surgical team's clothing", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing dirt and debris from a surface or object? ",
    answers: [
      { text: "TSterilization", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Cleaning", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a sterile prep solution? ",
    answers: [
      { text: "Bleach", correct: false },
      { text: "Alcohol", correct: false },
      { text: " Soap and water", correct: false },
      { text: "Hydrogen ", correct: false },
      { text: "Betadine", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a biological indicator used to test the efficacy of a sterilization process?",
    answers: [
      { text: "Sterilization tape", correct: false },
      { text: "Chemical indicators", correct: false },
      { text: "Heat-sensitive indicators", correct: false },
      { text: "Spore strips", correct: true },
      { text: "Autoclave bags", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a common type of surgical site infection?",
    answers: [
      { text: "Urinary tract infection", correct: false },
      { text: "Pneumonia ", correct: false },
      { text: "Meningitis ", correct: false },
      { text: "Endocarditis ", correct: false },
      { text: "Surgical wound infection", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection caused by bacteria commonly found in the hospital environment?",
    answers: [
      { text: " MRSA infection", correct: false },
      { text: "VRE infection ", correct: false },
      { text: "Pseudomonas infection ", correct: true },
      { text: "Staphylococcus aureus infection ", correct: false },
      { text: "Streptococcus infection", correct: false }
    ]
  },
  {
    question: "What is the primary goal of aseptic technique in surgery? ",
    answers: [
      { text: "To minimize the risk of infection ", correct: true },
      { text: "To maximize patient comfort", correct: false },
      { text: "To minimize the use of antibiotics", correct: false },
      { text: "To increase surgical speed", correct: false },
      { text: "To minimize surgical costs ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a non-sterile item in the surgical field?",
    answers: [
      { text: "Sterile gauze ", correct: false },
      { text: "Sterile drapes", correct: false },
      { text: " Sterile surgical instruments", correct: false },
      { text: "Non-sterile surgical gloves", correct: true },
      { text: " Sterile surgical gown ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of eliminating all microorganisms from a surface or object?",
    answers: [
      { text: "Sterilization", correct: true },
      { text: " Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization ", correct: false },
      { text: "Cleaning", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical site infection?",
    answers: [
      { text: "Pneumonia ", correct: false },
      { text: "Blood clot ", correct: false },
      { text: "Kidney failure", correct: false },
      { text: " Urinary tract infection", correct: false },
      { text: "Wound infection", correct: true }
    ]
  },
  {
    question: "WWhich of the following is an example of a sterile field?",
    answers: [
      { text: "The surgical team's shoes", correct: false },
      { text: "The surgical team's clothing", correct: false },
      { text: "The surgical table", correct: true },
      { text: "The surgical room's walls", correct: false },
      { text: "The surgical room's ceiling", correct: false }
    ]
  },
  {
    question: "Which of the following is the most effective way to reduce the risk of surgical site infections?",
    answers: [
      { text: "Using sterile surgical instruments ", correct: true },
      { text: "Administering antibiotics after surgery ", correct: false },
      { text: " Wearing clean clothing during surgery ", correct: false },
      { text: "Cleaning the surgical room with disinfectant ", correct: false },
      { text: "Minimizing the length of surgery", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a barrier method used to maintain a sterile field?",
    answers: [
      { text: "Wearing non-sterile clothing ", correct: false },
      { text: "Wearing sterile surgical gloves ", correct: true },
      { text: "Using non-sterile surgical instruments", correct: false },
      { text: "Using non-sterile drapes", correct: false },
      { text: "Wiping down the surgical table with tap water", correct: false }
    ]
  },
  {
    question: "What is the term for the process of reducing the number of microorganisms on non-living surfaces?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection ", correct: true },
      { text: "Antisepsis ", correct: false },
      { text: "Sanitization ", correct: false },
      { text: "Cleaning ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a high-level disinfectant?",
    answers: [
      { text: "Soap and water ", correct: false },
      { text: "Alcohol ", correct: false },
      { text: "Bleach ", correct: false },
      { text: "Hydrogen peroxide", correct: true },
      { text: "PAmmonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a low-level disinfectant?",
    answers: [
      { text: "Soap and water", correct: true },
      { text: "Alcohol ", correct: false },
      { text: "Bleach", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: " Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used when preparing a surgical site?",
    answers: [
      { text: "Using non-sterile surgical instruments ", correct: false },
      { text: "Wearing non-sterile clothing", correct: false },
      { text: "Using non-sterile drapes", correct: false },
      { text: "Wiping down the surgical site with tap water", correct: false },
      { text: "Using a sterile surgical prep solution ", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for surgical hand hygiene? ",
    answers: [
      { text: "Bleach", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Betadine", correct: false },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a chemical method of sterilization?",
    answers: [
      { text: "Autoclaving", correct: false },
      { text: "Gas sterilization", correct: false },
      { text: "Ethylene oxide sterilization", correct: true },
      { text: "Cold sterilization", correct: false },
      { text: "AChemical sterilization", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a chemical indicator used to test the efficacy of a sterilization process? ",
    answers: [
      { text: "Sterilization tape", correct: true },
      { text: " Biological indicators", correct: false },
      { text: "Heat-sensitive indicators ", correct: false },
      { text: "Spore strips ", correct: false },
      { text: "Autoclave bags ", correct: false }
    ]
  },
  {
    question: "What is the term for the process of preventing the introduction of microorganisms into a sterile field?",
    answers: [
      { text: "Sterilization", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Asepsis", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a surgical aseptic technique that should be used during a surgical procedure? ",
    answers: [
      { text: "Talking on the phone during surgery ", correct: false },
      { text: "Wearing non-sterile clothing", correct: false },
      { text: "Touching non-sterile surface", correct: false },
      { text: "Limiting movement in and out of the surgical area", correct: true },
      { text: "Using non-sterile surgical instruments", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that increases the risk of surgical site infections?",
    answers: [
      { text: "Short surgery time ", correct: false },
      { text: "Proper use of antibiotics", correct: false },
      { text: "Proper hand hygiene by the surgical team ", correct: false },
      { text: "Poor nutritional status of the patient ", correct: true },
      { text: "Minimal blood loss during surgery", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection caused by bacteria commonly found on the patient's skin?",
    answers: [
      { text: "MRSA infection ", correct: false },
      { text: "VRE infection", correct: false },
      { text: "Pseudomonas infection ", correct: false },
      { text: "Staphylococcus aureus infection ", correct: true },
      { text: "Streptococcus infection", correct: false }
    ]
  },
  {
    question: "What is the term for the process of removing dirt, debris, and other visible contaminants from a surface or object?",
    answers: [
      { text: "Sterilization ", correct: false },
      { text: "Disinfection", correct: false },
      { text: "Antisepsis", correct: false },
      { text: "Sanitization", correct: false },
      { text: "Cleaning", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used disinfectant for cleaning surfaces in the surgical environment? ",
    answers: [
      { text: "Bleach", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Betadine", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Ammonia ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of surgical site infection that occurs in the subcutaneous tissues and muscles?",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional", correct: true },
      { text: "POrgan/space ", correct: false },
      { text: "Systemic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of surgical site infection that occurs in organs or spaces that are manipulated during the surgical procedure? ",
    answers: [
      { text: "Superficial incisional", correct: false },
      { text: "Deep incisional ", correct: false },
      { text: "Organ/space", correct: true },
      { text: "Systemic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can increase the risk of surgical site infections?",
    answers: [
      { text: "Obesity", correct: false },
      { text: "Age", correct: false },
      { text: "Immunosuppression", correct: true },
      { text: "Diabetes", correct: false },
      { text: " All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of surgical site infections?",
    answers: [
      { text: "Proper hand hygiene ", correct: false },
      { text: " Sterilization of surgical instruments", correct: false },
      { text: "Use of prophylactic antibiotics", correct: false },
      { text: " Use of sterile drapes and gowns ", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a type of glove that is worn by surgical team members during surgical procedures?",
    answers: [
      { text: "Latex", correct: false },
      { text: "Vinyl", correct: false },
      { text: "Nitrile", correct: true },
      { text: "Neoprene", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: ". Which of the following is an example of a type of gown that is worn by surgical team members during surgical procedures? .",
    answers: [
      { text: "Cloth gown", correct: false },
      { text: "Disposable gown ", correct: false },
      { text: "Isolation gown", correct: false },
      { text: "Sterile gown ", correct: true },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of cap that is worn by surgical team members during surgical procedures? ",
    answers: [
      { text: "Baseball cap ", correct: false },
      { text: " Scrub cap ", correct: true },
      { text: "Chef's hat ", correct: false },
      { text: "Cowboy hat ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a type of cap that is worn by surgical team members during surgical procedures?",
    answers: [
      { text: "Baseball cap ", correct: false },
      { text: "Scrub cap ", correct: true },
      { text: "Chef's hat ", correct: false },
      { text: "Cowboy hat", correct: false },
      { text: "IAll of the above",correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing surgical fires?",
    answers: [
      { text: "Use of non-flammable skin preparations ", correct: false },
      { text: "Use of non-combustible drapes", correct: false },
      { text: "Minimizing the use of oxygen-enriched atmospheres ", correct: false },
      { text: "Use of fire-retardant materials", correct: false },
      { text: "IAll of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a hazard associated with surgical smoke?",
    answers: [
      { text: "Eye irritation", correct: false },
      { text: "Skin irritation", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Respiratory irritation", correct: false },
      { text: "Increased risk of infection", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for reducing the risk of surgical smoke hazards? ",
    answers: [
      { text: "Use of smoke evacuators  ", correct: false },
      { text: "All of the above", correct: true },
      { text: "Use of respiratory protection ", correct: false },
      { text: " Minimizing the use of energy devices ", correct: false },
      { text: "Use of local exhaust ventilation ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of hazard associated with the use of laser devices? ",
    answers: [
      { text: "Electrocution", correct: false },
      { text: "Explosion", correct: false },
      { text: "Fire", correct: false },
      { text: "Burns", correct: true },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of microorganism that can be killed by an antiseptic?",
    answers: [
      { text: "Bacteria", correct: false },
      { text: "All of the above", correct: true },
      { text: "Fungi", correct: false },
      { text: "Viruses",correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for evaluating the effectiveness of an antiseptic??",
    answers: [
      { text: "Swabbing the skin with a sterile sponge ", correct: false },
      { text: "Culture testing", correct: true },
      { text: "PMeasuring the pH of the solution ", correct: false },
      { text: "Measuring the concentration of the solution ", correct: false },
      { text: "HNone of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for skin preparation prior to an injection?",
    answers: [
      { text: "Betadine", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Chlorhexidine", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for wound care? ",
    answers: [
      { text: "Chlorhexidine", correct: false },
      { text: "H Hydrogen peroxide", correct: false },
      { text: " Formaldehyde", correct: false },
      { text: "Betadine", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper use of an antiseptic solution? ",
    answers: [
      { text: "Reading the manufacturer's instructions ", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Using a sterile technique ", correct: false },
      { text: "Wearing personal protective equipment", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing the development of resistance to an antiseptic solution?",
    answers: [
      { text: "Using the same antiseptic solution for all patients ", correct: false },
      { text: "Using a high concentration of the antiseptic solutio", correct: false },
      { text: "Alternating the use of different antiseptic solutions ", correct: true },
      { text: "None of the above", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is the primary goal of antisepsis?",
    answers: [
      { text: "• Killing all microorganisms", correct: false },
      { text: "Reducing the number of microorganisms to a safe level", correct: true },
      { text: "Inhibiting the growth of microorganisms ", correct: false },
      { text: " Removing all microorganisms from a surface ", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a factor that can affect the effectiveness of an antiseptic?",
    answers: [
      { text: "Duration of exposure ", correct: false },
      { text: "Concentration of the antiseptic", correct: false },
      { text: "Temperature of the solution", correct: false },
      { text: "All of the above", correct: true },
      { text: "pH of the solution", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a type of antiseptic that can be used to prepare the skin before surgery?",
    answers: [
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Bleach", correct: false },
      { text: "Vinegar", correct: false },
      { text: "Betadine", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for minimizing the risk of allergic reactions to an antiseptic?",
    answers: [
      { text: "Using a low concentration of the antiseptic", correct: false },
      { text: "Using a different type of antiseptic", correct: false },
      { text: "Using a high concentration of the antiseptic ", correct: false },
      { text: "Performing a skin patch test before use ", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of an antiseptic that can be used to clean medical instruments?",
    answers: [
      { text: "Vinegar", correct: false },
      { text: "Hydrogen peroxide ", correct: false },
      { text: "Bleach", correct: true },
      { text: "Betadine ", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the speed of the action of an antiseptic?",
    answers: [
      { text: "The concentration of the antiseptic ", correct: false },
      { text: "The temperature of the antiseptic", correct: false },
      { text: "All of the above ", correct: true },
      { text: "The type of microorganism ", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the toxicity of an antiseptic?",
    answers: [
      { text: "Concentration of the antiseptic", correct: false },
      { text: "Duration of exposure to the antiseptic ", correct: false },
      { text: "All of the above", correct: true },
      { text: "Type of microorganism present", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a method for storing an antiseptic solution? ",
    answers: [
      { text: "Keeping it in direct sunlight", correct: false },
      { text: "Keeping it at room temperature ", correct: false },
      { text: "Keeping it in a sealed container", correct: true },
      { text: "None of the above ", correct: false },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for wound care?",
    answers: [
      { text: "Chlorine gas ", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "Ethylene oxide", correct: false },
      { text: "Hydrogen peroxide", correct: true },
      { text: "Ethylene oxide", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a potential complication of using an antiseptic solution?",
    answers: [
      { text: "Tissue damage ", correct: false },
      { text: "Allergic reaction", correct: false },
      { text: "All of the above ", correct: true },
      { text: "Resistance development ", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the choice of antiseptic for  particular application?",
    answers: [
      { text: "The type of microorganism present", correct: false },
      { text: "All of the above ", correct: true },
      { text: "The concentration of the antiseptic", correct: false },
      { text: " The duration of exposure to the antiseptic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the efficacy of an antiseptic?",
    answers: [
      { text: "The color of the antiseptic ", correct: false },
      { text: " The pH of the solution", correct: false },
      { text: " None of the above ", correct: false },
      { text: "CThe presence of organic material", correct: true },
      { text: "All of the above ", correct: false }
    ]
  },
  {
    question: " Which of the following is an example of a commonly used antiseptic for disinfecting medical equipment?",
    answers: [
      { text: "Chlorine gas", correct: false },
      { text: "Betadine ", correct: false },
      { text: "Formaldehyde ", correct: false },
      { text: "Glutaraldehyde", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper dilution of an antiseptic solution?",
    answers: [
      { text: "Using a color indicator", correct: false },
      { text: "Using a pH meter ", correct: false },
      { text: "Measuring the solution by volume", correct: true },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Stages of the postoperative period",
    answers: [
      { text: "eaarly, remote", correct: false },
      { text: "late, remote ", correct: false },
      { text: "early, late, remote ", correct: true },
      { text: "prehospital, hospital", correct: false },
      { text: "hospital, rehabilitation", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing the spread of infection in ahealthcare setting?",
    answers: [
      { text: " Hand hygiene",correct: false },
      { text: " Wearing gloves",correct: false },
      { text: " Wearing a mas.",correct: false },
      { text: " All of the above",correct: true },
      { text: " None of the above",correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for preoperative skin preparation?",
    answers: [
      { text: "Betadine", correct: false },
      { text: "Chlorhexidine", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a factor that can affect the duration of exposure to an antiseptic?",
    answers: [
      { text: "The size of the area being treated", correct: true },
      { text: "The type of microorganism present", correct: false },
      { text: "The type of microorganism present", correct: false },
      { text: "All of the above", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a method for disinfecting surfaces in a healthcare setting?",
    answers: [
      { text: "Wiping the surface with a dry cloth", correct: false },
      { text: "Wiping the surface with water", correct: false },
      { text: "Using an ultraviolet light", correct: false },
      { text: "Using a chemical disinfectant", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for hand hygiene?",
    answers: [
      { text: "Chlorhexidine", correct: false },
      { text: "Ethanol", correct: true },
      { text: "Formaldehyde", correct: false },
      { text: "Betadine", correct: false },
      { text: " None of the above", correct: false },
    ],
  },

  {
    question: "Which of the following is an example of a commonly used antiseptic for surgical hand scrubbing?",
    answers: [
      { text: "Betadine", correct: false },
      { text: "Chlorhexidine", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: " None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for disinfecting skin prior to a medical procedure?",
    answers: [
      { text: "Chlorhexidine", correct: true },
      { text: "Ethanol", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "Betadine", correct: false },
      { text: " None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for maintaining the effectiveness of an antiseptic solution?",
    answers: [
      { text: "Storing the solution in a warm place", correct: false },
      { text: "Using an expired solution", correct: false },
      { text: "Mixing the solution with water", correct: false },
      { text: "Using the solution within its expiration date", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the safety of an antiseptic solution?",
    answers: [
      { text: "Storing the solution in a cool, dry place", correct: false },
      { text: "Wearing gloves while handling the solution", correct: false },
      { text: "Using the solution within its expiration date", correct: false },
      { text: " All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for sterilizing medical equipment?",
    answers: [
      { text: "Wiping the equipment with a dry cloth", correct: false },
      { text: "Soaking the equipment in water and soap", correct: false },
      { text: "Using an autoclave", correct: true },
      { text: "All of the above", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for cleaning wounds?",
    answers: [
      { text: "Ethanol", correct: false },
      { text: "Chlorhexidine", correct: false },
      { text: "Betadine", correct: true },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic?",
    answers: [
      { text: "Ethylene oxide", correct: false },
      { text: "Chlorine gas", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for applying an antiseptic to a surgical site?",
    answers: [
      { text: "Soaking the site in the antiseptic solution", correct: false },
      { text: " Spraying the site with the antiseptic solution", correct: false },
      { text: "Swabbing the site with the antiseptic solution", correct: true },
      { text: "All of the above", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring that an antiseptic is effective?",
    answers: [
      { text: "Testing the solution for microbial growth", correct: true },
      { text: "Measuring the pH of the solution", correct: false },
      { text: "Measuring the concentration of the solution", correct: false },
      { text: "Testing the solution on a small area of skin", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can reduce the effectiveness of an antiseptic?",
    answers: [
      { text: " Presence of organic matter on the surface", correct: true },
      { text: "Presence of inorganic matter on the surface", correct: false },
      { text: "Use of a low concentration of the antiseptic", correct: false },
      { text: " Use of a high concentration of the antiseptic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the safety of an antiseptic?",
    answers: [
      { text: "Flammability", correct: false },
      { text: "Toxicity", correct: false },
      { text: "Corrosiveness", correct: false },
      { text: "All of the above", correct: true  },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preparing a surface for antiseptic application?",
    answers: [
      { text: "Cleaning the surface with soap and water", correct: true },
      { text: "Wiping the surface with a dry cloth", correct: false },
      { text: "Heating the surface with a blowtorch", correct: false },
      { text: "None of the above", correct: false },
      { text: " All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for skin disinfection before surgery?",
    answers: [
      { text: "Ethylene oxide", correct: false },
      { text: "Chlorhexidine", correct: true },
      { text: "Glutaraldehyde", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for hand hygiene in healthcare settings?",
    answers: [
      { text: "Betadine", correct: false },
      { text: "Chlorine gas", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the stability of an antiseptic solution?",
    answers: [
      { text: "Exposure to light", correct: false },
      { text: "Exposure to heat", correct: false },
      { text: "Exposure to air", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing contamination of an antiseptic solution?",
    answers: [
      { text: "Using a sterile applicator each time the solution is used", correct: true },
      { text: "Covering the solution when not in use", correct: false },
      { text: "Refilling the solution from a contaminated source", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for disinfecting surfaces?",
    answers: [
      { text: "Hydrogen peroxide", correct: false },
      { text: "Chlorhexidine", correct: false },
      { text: "Alcohol", correct: true },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the effectiveness of an antiseptic during use?",
    answers: [
      { text: "Using a timer to ensure the proper contact time", correct: true },
      { text: "Increasing the concentration of the antiseptic", correct: false },
      { text: "Decreasing the contact time to save time", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing the development of resistance to an antiseptic?",
    answers: [
      { text: "Alternating the use of different antiseptics", correct: true },
      { text: "Increasing the concentration of the antiseptic", correct: false },
      { text: "Decreasing the contact time of the antiseptic", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the safety of an antiseptic?",
    answers: [
      { text: "By Concentration of the antiseptic", correct: false },
      { text: "Duration of exposure to the antiseptic", correct: false },
      { text: " Type of microorganism present", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the toxicity of an antiseptic?",
    answers: [
      { text: "The concentration of the antiseptic", correct: false },
      { text: "The duration of exposure to the antiseptic", correct: false },
      { text: "The type of microorganism present", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for sterilizing medical equipment?",
    answers: [
      { text: "Chlorine gas", correct: false },
      { text: "Ethylene oxide", correct: true },
      { text: "Alcohol", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the effectiveness of an antiseptic?",
    answers: [
      { text: "The temperature of the solution", correct: true },
      { text: "The type of container holding the solution", correct: false },
      { text: "The color of the solution", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper storage of an antiseptic solution?",
    answers: [
      { text: "Storing the solution at room temperature ", correct: true },
      { text: "Storing the solution in a clear container", correct: false },
      { text: "Storing the solution in a clear container", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for ensuring the proper disposal of an antiseptic solution?",
    answers: [
      { text: "Pouring the solution down the drain", correct: false },
      { text: "Discarding the solution in a regular trash bin", correct: false },
      { text: "Following proper hazardous waste disposal procedures", correct: true },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for oral care?",
    answers: [
      { text: "Chlorhexidine", correct: true },
      { text: "Hydrogen peroxide", correct: false },
      { text: "Betadine", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the pH of an antiseptic solution?",
    answers: [
      { text: "The concentration of the antiseptic", correct: true },
      { text: "The temperature of the solution", correct: false },
      { text: "The type of container holding the solution", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a method for preventing the transmission of infection in a healthcare setting?",
    answers: [
      { text: "Wearing gloves", correct: false },
      { text: "Isolating patients with infectious diseases", correct: false },
      { text: "Using sterile techniques during medical procedures", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the stability of an antiseptic solution?",
    answers: [
      { text: "The concentration of the antiseptic", correct: false },
      { text: "The type of container holding the solution", correct: false },
      { text: "The temperature of the solution", correct: false },
      { text: "None of the above ", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a method for disinfecting medical instruments?",
    answers: [
      { text: "Using an autoclave", correct: true },
      { text: "Soaking the instruments in water and soap", correct: false },
      { text: "Wiping the instruments with a dry cloth", correct: false },
      { text: "Boiling the instruments in water", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the safety of an antiseptic solution?",
    answers: [
      { text: "The toxicity of the antiseptic", correct: false },
      { text: "The duration of exposure to the antiseptic", correct: false },
      { text: "The type of container holding the solution", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for treating wounds?",
    answers: [
      { text: "Betadine", correct:true },
      { text: "Ethanol", correct: false },
      { text: "Chlorhexidine", correct: false },
      { text: "Formaldehyde", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the efficacy of an antiseptic solution?",
    answers: [
      { text: "The duration of exposure to the antiseptic", correct: false },
      { text: "The type of container holding the solution", correct: false },
      { text: "All of the above", correct: true },
      { text: "The concentration of the antiseptic", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a commonly used antiseptic for disinfecting medical equipment?",
    answers: [
      { text: "Formaldehyde", correct: false },
      { text: "Chlorhexidine", correct: true },
      { text: "Betadine", correct: false },
      { text: "Ethanol", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of a factor that can affect the skin's response to an antiseptic solution?",
    answers: [
      { text: "The concentration of the antiseptic", correct: false },
      { text: "The duration of exposure to the antiseptic", correct: false },
      { text: "The type of container holding the solution", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the medical term for the formation of a blood clot within a blood vessel?",
    answers: [
      { text: "Thrombosis", correct: true },
      { text: "Embolism", correct: false },
      { text: "Hematoma", correct: false },
      { text: "Hemorrhage", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a potential cause of bleeding during or after surgery?",
    answers: [
      { text: "Medication interactions", correct: false },
      { text: "Allergic reactions", correct: false },
      { text: "All of the above", correct: true },
      { text: "Underlying medical conditions", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: " What is the role of fibrin in hemostasis?",
    answers: [
      { text: "To promote platelet aggregation", correct: false },
      { text: "To form a plug at the site of injury", correct: true },
      { text: "To activate clotting factors", correct: false },
      { text: "To inhibit clotting factors", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following blood products is used to replace blood volume?",
    answers: [
      { text: "Packed red blood cells", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Platelets", correct: false },
      { text: "Albumin", correct: true },
      { text: "Cryoprecipitate", correct: false }
    ]
  },
  {
    question: "Which blood component contains clotting factors and is used to treat bleeding disorders?",
    answers: [
      { text: "Packed red blood cells", correct: false },
      { text: "Platelets", correct: false },
      { text: "Plasma", correct: false },
      { text: "Cryoprecipitate", correct: true },
      { text: " None of the above", correct: false }
    ]
  },
  {
    question: " What is a common method used to control bleeding during surgery?",
    answers: [
      { text: "Tourniquet application", correct: true },
      { text: "Administration of an anticoagulant", correct: false },
      { text: "Use of a heating pad", correct: false },
      { text: "Application of ice", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the initial step to control bleeding in surgery?",
    answers: [
      { text: "Administering anesthetic to the patient", correct: false },
      { text: "Suturing the wound", correct: false },
      { text: "Cleaning the wound", correct: false },
      { text: "Applying pressure to the surgical site", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of bleeding that occurs when blood vessels are not properly sealed during surgery?",
    answers: [
      { text: "Arterial bleeding", correct: false },
      { text: "Venous bleeding", correct: false },
      { text: "Capillary bleeding", correct: false },
      { text: "Hematoma", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following medications can increase the risk of bleeding during surgery?",
    answers: [
      { text: "Aspirin", correct: true },
      { text: "Antibiotics", correct: false },
      { text: "Antihistamines", correct: false },
      { text: "Antidepressants", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a method used to prevent bleeding during surgery?",
    answers: [
      { text: "Administering anticoagulant medication", correct: true },
      { text: "Using a heating pad on the surgical site", correct: false },
      { text: "Drinking alcohol before the surgery", correct: false },
      { text: "Applying ice to the surgical site", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is a common method used to diagnose bleeding after surgery?",
    answers: [
      { text: "Imaging tests such as ultrasound or CT scan", correct: false },
      { text: "Physical examination of the surgical site", correct: false },
      { text: "Blood tests to assess clotting ability", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is a potential complication of using a tourniquet to control bleeding during surgery?",
    answers: [
      { text: "Inadequate control of bleeding", correct: false },
      { text: "Damage to nerves or tissues", correct: true },
      { text: "Increased risk of infection", correct: false },
      { text: " All of the above", correct: false },
      { text: " None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is the definition of hemostasis?",
    answers: [
      { text: "The process of clotting blood", correct: false },
      { text: "The process of controlling bleeding", correct: true },
      { text: "The process of removing blood clots", correct: false },
      { text: "The process of promoting blood flow", correct: false },
      { text: "The process of filtering blood", correct: false }
    ]
  },
  {
    question: "What is the first step of hemostasis?",
    answers: [
      { text: "Platelet aggregation", correct: false },
      { text: "Clotting factor activation", correct: false },
      { text: "Vasoconstriction", correct: true },
      { text: "Fibrinolysis", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of clotting factor?  ",
    answers: [
      { text: "Fibrinogen ", correct: false },
      { text: "Thrombin", correct: false },
      { text: "Prothrombin", correct: false },
      { text: "All of the above ", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the process of breaking down blood clots called? ",
    answers: [
      { text: "Clotting", correct: false },
      { text: "Hemostasis", correct: false },
      { text: "Fibrinolysis", correct: true },
      { text: "Coagulation", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the purpose of the International Normalized Ratio (INR) test? ",
    answers: [
      { text: "To measure the effectiveness of anticoagulation therapy", correct: true },
      { text: "To assess platelet function ", correct: false },
      { text: "To evaluate liver function ", correct: false },
      { text: "All of the above ", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following hemostatic agents can be applied as a spray or a gel to the bleeding area?",
    answers: [
      { text: "Absorbable gelatin sponge", correct: false },
      { text: "Thrombin", correct: false },
      { text: "Oxidized cellulose ", correct: false },
      { text: "Polysaccharide spheres ", correct: false },
      { text: "Fibrin sealant", correct: true }
    ]
  },
  {
    question: "Which of the following is a hemostatic disorder that causes excessive bleeding?",
    answers: [
      { text: "Hemophilia A ", correct: false },
      { text: "Von Willebrand disease ", correct: false },
      { text: "Deep vein thrombosis ", correct: false },
      { text: "Thrombocytopenia ", correct: true },
      { text: "Atherosclerosis", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of hemostatic device that uses a clip to compress blood vessels and stop bleeding? ",
    answers: [
      { text: "Endoscopic clip applier ", correct: true },
      { text: "Endoscopic", correct: false },
      { text: "Bipolar electrocautery ", correct: false },
      { text: "Ligasure", correct: false },
      { text: "Hemostat", correct: false }
    ]
  },
  {
    question: "Which of the following is a technique used to stop bleeding by applying a band or wrap to the affected area? ",
    answers: [
      { text: "Pressure dressing ", correct: true },
      { text: "Ligature", correct: false },
      { text: "Electrocautery", correct: false },
      { text: "Laser therapy", correct: false },
      { text: "Hemostatic device", correct: false }
    ]
  },
  {
    question: "Which of the following blood types is considered the universal recipient?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: true },
      { text: "O", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "Which of the following is a measure of how much oxygen-carrying capacity a patient's blood has?",
    answers: [
      { text: "Activated partial thromboplastin time", correct: false },
      { text: "Prothrombin time", correct: false },
      { text: "Platelet count ", correct: false },
      { text: "Hematocrit ", correct: false },
      { text: "Hemoglobin", correct: true }
    ]
  },
  {
    question: "Which of the following is a type of transfusion reaction that occurs when the patient has pre-existing antibodies to the transfused blood cells? ",
    answers: [
      { text: "Allergic reaction ", correct: false },
      { text: "Hemolytic reaction", correct: false },
      { text: "Febrile non-hemolytic reaction ", correct: false },
      { text: "Transfusion-related acute lung injury ", correct: false },
      { text: "Delayed hemolytic reaction", correct: true }
    ]
  },
  {
    question: "Which blood type is known as the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: false },
      { text: "O", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the primary reason for performing a crossmatch prior to blood transfusion?",
    answers: [
      { text: "To determine the patient's blood type",correct:false},
      { text: "To ensure compatibility between the patient's blood and the donor blood", correct: true },
      { text: "To monitor for transfusion reactions", correct: false },
      { text: "To assess for potential bleeding risks", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following blood components is used to control bleeding disorders?",
    answers: [
      { text: "Packed red blood cells", correct: false },
      { text: "Platelets", correct: true },
      { text: "Plasma", correct: false },
      { text: "Cryoprecipitate", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the maximum allowable volume of blood that can be transfused at one time?",
    answers: [
      { text: "500 mL", correct: true },
      { text: "1,000 mL", correct: false },
      { text: " 2,000 mL", correct: false },
      { text: " 3,000 mL", correct: false },
      { text: "There is no maximum allowable volume", correct: false }
    ]
  },
  {
    question: "Which of the following is a definition of bleeding in surgery?",
    answers: [
      { text: "The flow of blood from a surgical incision", correct: true },
      { text: "The accumulation of pus in a surgical wound", correct: false },
      { text: "The swelling of tissues around a surgical site", correct: false },
      { text: "The development of an infection in a surgical wound", correct: false },
      { text: "The discoloration of skin around a surgical site", correct: false }
    ]
  },
  {
    question: "What is the medical term for excessive bleeding during or after surgery?",
    answers: [
      { text: "Hemorrhage", correct: true },
      { text: "Hematoma", correct: false },
      { text: "Seroma", correct: false },
      { text: "Thrombosis", correct: false },
      { text: "Embolism", correct: false }
    ]
  },
  {
    question: "What is the main cause of bleeding during surgery? ",
    answers: [
      { text: "Inadequate blood clotting", correct: false },
      { text: "Poor surgical technique", correct: true },
      { text: "Infection", correct: false },
      { text: "Medication side effects", correct: false },
      { text: "None of the above ", correct: false }
    ]
  },
  {
    question: "What is the purpose of cauterization in surgery?",
    answers: [
      { text: "To stop bleeding", correct: true },
      { text: "To reduce inflammation", correct: false },
      { text: "To remove damaged tissue", correct: false },
      { text: "To sterilize the surgical site", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is a common symptom of internal bleeding?",
    answers: [
      { text: "Swelling", correct: false },
      { text: "Bruising", correct: false },
      { text: "Pain", correct: false },
      { text: "All of the above", correct: false },
      { text: "None of the above", correct: true }
    ]
  },
  {
    question: "What is a common complication of excessive bleeding during or after surgery?",
    answers: [
      { text: "Shock", correct: true },
      { text: "Nausea", correct: false },
      { text: "Vomiting", correct: false },
      { text: "All of the above", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the medical term for a collection of blood outside of blood vessels, usually in tissues?",
    answers: [
      { text: "Hemorrhage", correct: false },
      { text: "Hematoma", correct: true },
      { text: "Seroma", correct: false },
      { text: "Thrombosis", correct: false },
      { text: "Embolism", correct: false }
    ]
  },
  {
    question: "What is the recommended position for a patient with internal bleeding?",
    answers: [
      { text: "Supine", correct: false },
      { text: "Prone", correct: false },
      { text: "Lateral", correct: false },
      { text: "Trendelenburg", correct: false },
      { text: "None of the above", correct: true }
    ]
  },
  {
    question: "Which of the following is a type of bleeding that occurs due to damage to blood vessels caused by blunt trauma",
    answers: [
      { text: "Arterial bleeding", correct: false },
      { text: "Venous bleeding", correct: false },
      { text: "Capillary bleeding", correct: false },
      { text: "Hematoma", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the primary goal when treating bleeding during or after surgery?",
    answers: [
      { text: "To stop the bleeding", correct: true },
      { text: " To minimize pain", correct: false },
      { text: "To reduce inflammation", correct: false },
      { text: "To prevent infection", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a potential complication of excessive bleeding during or after surgery?",
    answers: [
      { text: "Hypertension", correct: false },
      { text: "Hypotension", correct: true },
      { text: "Tachycardia", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What are the three steps of hemostasis?",
    answers: [
      { text: "Vasodilation, platelet aggregation, clotting factor activation", correct: false },
      { text: " Vasoconstriction, platelet aggregation, clotting factor activation", correct: true },
      { text: "Vasodilation, platelet activation, clotting factor inhibition", correct: false },
      { text: "Vasoconstriction, platelet activation, clotting factor inhibition", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the role of platelets in hemostasis?",
    answers: [
      { text: "To initiate clotting factor activation", correct: false },
      { text: " To promote vasoconstriction", correct: false },
      { text: "To aggregate and form a plug at the site of injury", correct: false },
      { text: "To break down blood clots", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the final product of the clotting cascade?",
    answers: [
      { text: "Fibrin", correct: true },
      { text: "Fibrinogen", correct: false },
      { text: "Thrombin", correct: false },
      { text: "Prothrombin", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What is the recommended treatment for abnormal hemostasis?",
    answers: [
      { text: "Anticoagulants", correct: false },
      { text: "Antiplatelet agents", correct: false },
      { text: "Transfusion of blood products", correct: false },
      { text: "All of the above", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following hemostatic agents works by promoting platelet aggregation?",
    answers: [
      { text: "Collagen", correct: true },
      { text: "Thrombin", correct: false },
      { text: "Fibrinogen", correct: false },
      { text: "Tranexamic acid", correct: false },
      { text: "Vitamin K", correct: false }
    ]
  },
  {
    question: "Which of the following hemostatic agents is a synthetic form of human fibrinogen?",
    answers: [
      { text: "Oxidized cellulose", correct: false },
      { text: "Gelatin sponge", correct: false },
      { text: "Fibrin sealant", correct: true },
      { text: "Thrombin", correct: false },
      { text: "Polysaccharide spheres", correct: false }
    ]
  },
  {
    question: "Which of the following is NOT a mechanism of hemostasis?",
    answers: [
      { text: "Platelet aggregation", correct: false },
      { text: "Vasoconstriction", correct: false },
      { text: "Fibrinolysis", correct: false },
      { text: "Coagulation cascade", correct: false },
      { text: "All of the above are mechanisms of hemostasis", correct: true }
    ]
  },
  {
    question: "Which of the following is a medication that can be used to promote hemostasis?",
    answers: [
      { text: "Aspirin", correct: false },
      { text: "Warfarin", correct: false },
      { text: "Tranexamic acid", correct: true },
      { text: "Heparin", correct: false },
      { text: "All of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a protein that helps to promote clotting?",
    answers: [
      { text: "Antithrombin", correct: false },
      { text: "Thrombin", correct: true },
      { text: "Plasmin", correct: false },
      { text: " Heparin", correct: false },
      { text: "Collagen", correct: false }
    ]
  },
  {
    question: "Which of the following blood types is considered the universal donor?",
    answers: [
      { text: "A", correct: false },
      { text: "AB", correct: false },
      { text: "B", correct: false },
      { text: "O", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a potential risk associated with blood transfusions?",
    answers: [
      { text: "Allergic reaction", correct: false },
      { text: "Transmission of infections", correct: false },
      { text: "Transfusion-related acute lung injury", correct: false },
      { text: "Hemolytic reaction", correct: false },
      { text: "All of the above", correct: true }
    ]
  },
  {
    question: "Which of the following blood products is used to treat clotting disorders?",
    answers: [
      { text: "Packed red blood cells", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Cryoprecipitate", correct: true },
      { text: "Platelets", correct: false },
      { text: "Albumin", correct: false }
    ]
  },
  {
    question: "Which of the following blood products is used to increase blood volume and oxygen-carrying capacity?",
    answers: [
      { text: "Albumin", correct: false },
      { text: "Cryoprecipitate", correct: false },
      { text: "Platelets", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Packed red blood cells", correct: true }
    ]
  },
  {
    question: "Which of the following blood components can be transfused without crossmatching?",
    answers: [
      { text: "Platelets", correct: true },
      { text: "Packed red blood cells", correct: false },
      { text: "Fresh frozen plasma", correct: false },
      { text: "Cryoprecipitate", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of transfusion reaction that occurs when the patient's immune system attacks the transfused red blood cells?",
    answers: [
      { text: "Allergic reaction", correct: false },
      { text: "Febrile non-hemolytic reaction", correct: false },
      { text: "Hemolytic reaction", correct: true },
      { text: "Transfusion-related acute lung injury", correct: false },
      { text: "Delayed hemolytic reaction", correct: false }
    ]
  },
  {
    question: "Which of the following is a type of transfusion reaction that occurs when the patient has a fever and chills but no evidence of hemolysis?",
    answers: [
      { text: "Allergic reaction", correct: false },
      { text: "Hemolytic reaction", correct: false },
      { text: "Delayed hemolytic reaction", correct: false },
      { text: "Transfusion-related acute lung injury", correct: false },
      { text: "Febrile non-hemolytic reaction",correct: true }
    ]
  },
  {
    question: "Which of the following is not a potential complication of blood transfusion?",
    answers: [
      { text: "Pulmonary embolism", correct: true },
      { text: "Transfusion reaction", correct: false },
      { text: "Hemolytic anemia", correct: false },
      { text: "Infection transmission", correct: false },
      { text: "All of the above are potential complications.", correct: false }
    ]
  },
  {
    question: "Which blood type is known as the universal recipient?",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "AB", correct: true },
      { text: "O", correct: false },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "How long can a unit of packed red blood cells be stored before it should be discarded?",
    answers: [
      { text: " 1 week", correct: false },
      { text: "8 weeks", correct: true },
      { text: "3 weeks", correct: false },
      { text: "6 weeks", correct: false },
      { text: "10 weeks", correct: false }
    ]
  },
  {
    question: "Which of the following is a potential complication of massive blood transfusion?",
    answers: [
      { text: "Hypothermia", correct: false },
      { text: "Hyperthermia", correct: false },
      { text: "Hypertension", correct: false },
      { text: "Hypotension", correct: false },
      { text: "All of the above are potential complications.", correct: true }
    ]
  },
  {
    question: "To control the quality of preoperative hand cleansing is used:",
    answers: [
      { text: "Thermal indicator", correct: false },
      { text: "Bacteriological control", correct: true },
      { text: "Phenolphthalein test", correct: false },
      { text: "Amidopyrine sample", correct: false },
      { text: "Ultraviolet lightening", correct: false }
    ]
  },
  {
    question: "All the participants in the operation must be",
    answers: [
      { text: "In sterile clothes", correct: false },
      { text: "In aprons", correct: true },
      { text: "In clean clothes", correct: false },
      { text: "In sterile clothing and a mask", correct: false },
      { text: "In cap", correct: false }
    ]
  },
  {
    question: "The preoperative period begins with:?",
    answers: [
      { text: "The onset of the disease", correct: false },
      { text: "The diagnosis", correct: false },
      { text: "The beginning of a preparation for the operation", correct: true },
      { text: "The moment of admission to the surgical hospital", correct: false },
      { text: "The starting of operation", correct: false }
    ]
  },
  {
    question: "A nurse will schedule the shaving of the surgical field for a patient preparing for a planned?",
    answers: [
      { text: "During operation", correct: false },
      { text: " 1 day before the operation", correct: false },
      { text: " in the evening before the operation", correct: false },
      { text: "on the day of the operation", correct: true },
      { text: "on the operating table", correct: false }
    ]
  },
  {
    question: "The time of shaving the skin before the planned operation is:?",
    answers: [
      { text: "the day before the operation", correct: false },
      { text: "in the morning on the day of the operation", correct: true },
      { text: "the night before the operation", correct: false },
      { text: "on the operating table", correct: false },
      { text: "During operation", correct: false }
    ]
  },
  {
    question: "The method of transporting the patient to the operating room is:?",
    answers: [
      { text: "sitting in a wheelchair", correct: false },
      { text: "taking the patient under the arm", correct: false },
      { text: "lying on a gurney", correct: true },
      { text: "to send the patient himself", correct: false },
      { text: "By walk", correct: false }
    ]
  },
  {
    question: "Immediately after the surgery, the patient is usually shifted to:",
    answers: [
      { text: "ICU (Intensive care unit)", correct: false },
      { text: "PACU (Postanesthesia care unit)", correct: true },
      { text: "CCU (Critical care unit)", correct: false },
      { text: "Recovery room", correct: false },
      { text: "Home", correct: false }
    ]
  },
  {
    question: "The main task of the preoperative period is?",
    answers: [
      { text: "to sanitize the foci of infection", correct: false },
      { text: "to examine the cardiovascular system", correct: false },
      { text: "to improve the patient’s condition", correct: false },
      { text: "to prepare the patient for a surgery", correct: true },
      { text: "To observe the patient", correct: false }
    ]
  },
  {
    question: "A type of sanitary cleanup before the planned operation is",
    answers: [
      { text: "a skin wiping and linen change", correct: false },
      { text: "a partial sanitary cleanup", correct: false },
      { text: "a sanitary cleanup is not performed", correct: false },
      { text: "a complete sanitary cleanup", correct: true },
      { text: "Wiping the walls", correct: false }
    ]
  },
  {
    question: "The priority psychological problem of the patient in the preoperative period is:?",
    answers: [
      { text: " A lack of self-care", correct: false },
      { text: "An anxiety for the work left", correct: false },
      { text: "The underestimating the severity of his condition", correct: false },
      { text: "A feeling of fear", correct: true },
      { text: "The support", correct: false }
    ]
  },
  {
    question: "A preoperative assessment should include all of the following except:",
    answers: [
      { text: "Current medication and drugs", correct: false },
      { text: "Current medication and drugs", correct: false },
      { text: "Patient knowledge of rehabilitation", correct: true },
      { text: "Age, weight, height", correct: false },
      { text: "The anamnesis", correct: false }
    ]
  },
  {
    question: "To prepare the hands of the operating team is used?",
    answers: [
      { text: "1% chloramine solution", correct: false },
      { text: "3% alcohol solution of hydrogen peroxide", correct: false },
      { text: "a 2.4% solution of pervomur", correct: true },
      { text: "3% chloramine solution", correct: false },
      { text: "Iodine povidone", correct: false }
    ]
  },
  {
    question: "Patient care is",
    answers: [
      { text: "The implementation of a hospital regime for a clear organization of the work of the medical staff of the department or clinic", correct: false },
      { text: "A set of measures necessary for any patient, regardless of the nature of the disease, age, gender.", correct: false },
      { text: "A set of measures aimed at creating favorable conditions for successful treatment leads to an improvement in the patient's condition and satisfaction of his physiological needs. +", correct: true },
      { text: "Measures that have specific features of the type of medical care.", correct: false },
      { text: "complex of measures to stabilize nutrition of patient", correct: false }
    ]
  },
  {
    question: "Prevention of postoperative thrombosis consists in",
    answers: [
      { text: "strict bed rest", correct: false },
      { text: "application of cupping massage on the chest", correct: false },
      { text: "active postoperative management of the patient, the use of anticoagulants +", correct: true },
      { text: "the use of salt blood substitutes", correct: false },
      { text: "Bandaging", correct: false }
    ]
  },
  {
    question: "For the prevention of pneumonia in the postoperative period, it is necessary",
    answers: [
      { text: "prescribe antitussive remedies", correct: false },
      { text: "monitor compliance with strict bed rest", correct: false },
      { text: "prohibit smoking", correct: false },
      { text: "perform breathing exercises, massage; +", correct: true },
      { text: "Prohibit alcohol", correct: false }
    ]
  },
  {
    question: "An emergency change of dressing after surgery is not required when?",
    answers: [
      { text: "Bleeding", correct: false },
      { text: "soaking the bandage with blood", correct: false },
      { text: "slight wetting with serous exudate +", correct: true },
      { text: "soreness of the wound edges", correct: false },
      { text: "increase in body temperature", correct: false }
    ]
  },
  {
    question: "What essential preoperative assessment should be performed before the emergency appendectomy?",
    answers: [
      { text: "Obtain a detailed medical history.", correct: true },
      { text: "Check the patient's blood type", correct: false },
      { text: "Evaluate the patient's mental status", correct: false },
      { text: "Confirm the presence of a fever", correct: false },
      { text: "Assess the patient's allergies.", correct: false }
    ]
  },
  {
    question: "What differentiates emergency surgery from elective surgery?",
    answers: [
      { text: "No preoperative preparation", correct: false },
      { text: "Immediate necessity due to a life-threatening conditio", correct: true },
      { text: "Limited anesthesia requirements", correct: false },
    ]
  },
  {
    question: "What characterizes minimally invasive surgery?",
    answers: [
      { text: "Large incisions and extensive tissue exposure", correct: false },
      { text: "Limited use of technology.", correct: false },
      { text: "Reduced reliance on imaging techniques.", correct: false },
      { text: "Small incisions and the use of specialized instruments.", correct: true },
      { text: "Prolonged recovery time.", correct: false }
    ]
  },
  {
    question: "How should you deliver ventilations during adult CPR?",
    answers: [
      { text: "Deliver forceful breaths to ensure chest rise.", correct: false },
      { text: "Provide rapid, shallow breaths.", correct: false },
      { text: "Deliver ventilations over 2 seconds, watching for chest rise.", correct: true },
      { text: "Administer one breath every 10 seconds.", correct: false },
      { text: "Perform continuous ventilations without pauses.", correct: false }
    ]
  },
  {
    question: "What is the primary goal of airway management during general anesthesia induction?",
    answers: [
      { text: "Promotion of patient comfort.)", correct: false },
      { text: "Maintenance of vocal cord function", correct: false },
      { text: "Prevention of gastric aspiration.", correct: true },
      { text: "Facilitation of communication.", correct: false },
      { text: "Reduction of salivary secretion", correct: false }
    ]
  },
{
    question: "Shortly after induction, the patient's blood pressure drops significantly. What is the most appropriate initial intervention?",
    answers: [
      { text: "Administer a bolus of crystalloid fluids.", correct: false },
      { text: "Increase the depth of anesthesia.", correct: false },
      { text: "Discontinue anesthesia to assess the patient's D", correct: true },
      { text: "Notify the surgeon to expedite the procedure.", correct: false },
      { text: "Administer a vasopressor medication.", correct: false }
    ]
  },
{
    question: "The patient develops urticaria and bronchospasm immediately after receiving an intravenous induction agent. What is the immediate action to manage this situation?",
    answers: [
      { text: "Administer an antihistamine.", correct: false },
      { text: "Continue with the planned anesthesia.", correct: false },
      { text: "Switch to a different intravenous induction agent..", correct: false },
      { text: "Administer a corticosteroid.", correct: false },
      { text: "Discontinue the induction agent and secure the airway..", correct: true }
    ]
  },
{
    question: "What is the primary purpose of induction agents in general anesthesia?",
    answers: [
      { text: "Muscle relaxation.", correct: false },
      { text: "Analgesia.", correct: false },
      { text: "Loss of consciousness.", correct: true },
      { text: "Maintenance of blood pressure.", correct: false },
      { text: "Anterograde amnesia.", correct: false }
    ]
  },
{
    question: "Which intravenous anesthetic agent is associated with a rapid onset of action and a short duration of action?",
    answers: [
      { text: "Propofol.", correct: false },
      { text: "Ketamine.", correct: false },
      { text: "Etomidate.", correct: true },
      { text: "Thiopental.", correct: false },
      { text: "Midazolam.", correct: false }
    ]
  },
{
    question: "What is the primary purpose of the induction phase in general anesthesia?",
    answers: [
      { text: "Maintenance of blood pressure.", correct: false },
      { text: "Loss of consciousness", correct: true },
      { text: "Anterograde amnesia.", correct: false },
      { text: "Analgesia.", correct: false },
      { text: "Muscle relaxation..", correct: false }
    ]
  },
{
    question: "What is a crucial consideration before deciding to extubate a patient at the end of surgery during general anesthesia?",
    answers: [
      { text: "Adequate reversal of neuromuscular blockade..", correct: true },
      { text: "Completion of the surgical procedure..", correct: false },
      { text: "Normalization of blood pressure.", correct: false },
      { text: "Initiation of postoperative pain management.", correct: false },
      { text: "Confirmation of the patient's preoperative meal.", correct: false }
    ]
  },
{
    question: "When using an automated external defibrillator (AED) on an adult in cardiac arrest, what action should be taken before delivering a shock?",
    answers: [
      { text: "Administer epinephrine.", correct: false },
      { text: "Ensure a patent airway..", correct: false },
      { text: "Continue chest compressions..", correct: true },
      { text: "Assess for a pulse.", correct: false },
      { text: "Apply petroleum jelly to the chest.", correct: false }
    ]
  },
{
    question: "What is the correct compression technique during adult CPR?",
    answers: [
      { text: "Use the heel of one hand, compressing at the xiphoid process.", correct: false },
      { text: "Compress with both hands interlocked, placing them over the lower half of the sternum.", correct: false },
      { text: "Compress with one hand, placing it over the upper half of the sternum.", correct: false },
      { text: "Use the fingers, applying pressure just below the ribcage..", correct: false },
      { text: "Compress with the palm of one hand, placing it over the lower third of the sternum.", correct: true }
    ]
  },
{
    question: "What is the correct compression rate for adult CPR?",
    answers: [
      { text: "60 compressions per minute.", correct: false },
      { text: "80 compressions per minute..", correct: false },
      { text: "100 compressions per minute.", correct: true },
      { text: "120 compressions per minute..", correct: false },
      { text: "140 compressions per minute.", correct: false }
    ]
  },
{
    question: "How should you deliver ventilations during adult CPR?",
    answers: [
      { text: "0.5 inches (1.3 cm).", correct: false },
      { text: "1 inch (2.5 cm)", correct: true },
      { text: "1.5 inches (4 cm).", correct: false },
      { text: "2 inches (5 cm).", correct: false },
      { text: "2.5 inches (6.4 cm).", correct: false }
    ]
  },
{
    question: "What is the name for the type of bandage that is applied in a spiral pattern to secure a dressing in place?",
    answers: [
      { text: "Figure-eight bandage.", correct: false },
      { text: "Recurrent bandage.", correct: false },
      { text: "Spiral bandage", correct: true },
      { text: "Circular bandage", correct: false },
      { text: "Straight bandage .", correct: false }
    ]
  },
  {
    question: "Patient care is divided into",
    answers: [
      { text: "hospital and sanitary", correct: false },
      { text: "general and special", correct: true },
      { text: "general and individual", correct: false },
      { text: "therapeutic and protective", correct: false },
      { text: "general and prophylactic ", correct: false },
    ],
  },
  {
    question: "A study that helps in the diagnosis of pulmonary embolism ",
    answers: [
      { text: "biochemical blood analysis ", correct: false },
      { text: "Computed tomography angiography", correct: true },
      { text: "electrocardiography", correct: false },
      { text: "general urine analysis ", correct: false },
      { text: "fibrobronchoscopy", correct: false },
    ],
  },
  {
    question: "Complication of the early postoperative period ",
    answers: [
      { text: "intestinal eventration", correct: false },
      { text: "bronchopneumonia", correct: false },
      { text: "vomiting", correct: true },
      { text: "ligature fistula ", correct: false },
      { text: "wound infection", correct: false },
    ],
  },
  {
    question: " Prevention of thromboembolism after surgery",
    answers: [
      { text: "breathing exercises", correct: false },
      { text: "bandaging of the lower extremities", correct: true },
      { text: "hot water bottles to the feet", correct: false },
      { text: "cold lotions", correct: false },
      { text: "raising legs above the heart", correct: false },
    ],
  },
  {
    question: "The position of the patient in bed for the prevention of flatulence",
    answers: [
      { text: "horizontal on the back", correct: false },
      { text: "fowler", correct: true },
      { text: "tredelenburg", correct: false },
      { text: "it doesn't matter", correct: false },
      { text: "prone position", correct: false },
    ],
  },

  {
    question: "Prevention of secondary bleeding after surgery",
    answers: [
      { text: "Locating trends", correct: false },
      { text: "Compensation", correct: false },
      { text: "Identifying disease and injury", correct: true },
      { text: "Exposure reduction", correct: false },
      { text: "Substitution", correct: false }
    ]
  },
  {
    question: "Why is awareness important in occupational health?",
    answers: [
      { text: "thermometry", correct: false },
      { text: "warmers to the feet", correct: false },
      { text: "vertical position ", correct: false },
      { text: "horizontal position", correct: false },
      { text: "blood pressure measurement ", correct: true }
    ]
  },
  {
    question: "In the postoperative period, the care of patients after operations on the abdominal organs includes the following measures, with the exception of",
    answers: [
      { text: "prevention of complications from the respiratory system", correct: false },
      { text: "control of the stool and the discharge of gases, if necessary - a gas outlet tube", correct: false },
      { text: "regular X-ray monitoring of the thoracic cavity, starting from the 1st day ", correct: true },
      { text: "care of the postoperative wound ", correct: false },
      { text: "respiratory gymnastics, inhalations, chest massage", correct: false }
    ]
  },
  {
    question: "Everything contributes to the divergence of the wound edges after laparotomy, except ",
    answers: [
      { text: "high intra-abdominal pressure", correct: false },
      { text: "hematoma", correct: false },
      { text: "suppuration of the wound", correct: false },
      { text: "evisceration", correct: false },
      { text: "massive infusion therapy", correct: true }
    ]
  },
  {
    question: "With flatulence in the postoperative period, everything is shown except",
    answers: [
      { text: " the introduction of a gas outlet tube into the anus", correct: false },
      { text: "the introduction of antispasmodics", correct: false },
      { text: "gastric lavage", correct: true },
      { text: "drug stimulation of peristalsis", correct: false },
      { text: "bloating and discomfort", correct: false }
    ]
  },
  {
    question: "In the presence of bedsores, everything is necessary except",
    answers: [
      { text: "the use of lining circles", correct: false },
      { text: "rubbing the skin with camphor alcohol", correct: false },
      { text: "changing the position of the patient in bed", correct: false },
      { text: "keeping the skin clean and wet", correct: false },
      { text: "laying the patient on a hard mattress", correct: true }
    ]
  },
  {
    question: "TTo combat postoperative intestinal paresis is not used",
    answers: [
      { text: "hypertensive enema", correct: false },
      { text: "intravenous administration of a hypertensive complex", correct: false },
      { text: "siphon enema", correct: true },
      { text: "administration of proserin solution subcutaneously", correct: false },
      { text: "bowel rest", correct: false }
    ]
  },
  {
    question: "In a surgical patient, the cause of a surgical infection is",
    answers: [
      { text: "lower respiratory tract infection", correct: false },
      { text: "clostridium difficile diarrhea", correct: false },
      { text: "urinary tract infection", correct: false },
      { text: "wound infection", correct: true },
      { text: "external environment", correct: false }
    ]
  },
  {
    question: "Exogenous path of infection penetration into the wound is from",
    answers: [
      { text: "teeth destroyed by caries", correct: false },
      { text: "external environment", correct: true },
      { text: "inflamed tonsils", correct: false },
      { text: "affected kidneys", correct: false },
      { text: "contact", correct: false }
    ]
  },
  {
    question: "Endogenous path of infection penetration into the wound is",
    answers: [
      { text: "airborne", correct: false },
      { text: "contact", correct: false },
      { text: "air-dust", correct: false },
      { text: "contaminated device", correct: false },
      { text: "lymphogenic", correct: true }
    ]
  },
  {
    question: "Hydradenitis is an inflammation of",
    answers: [
      { text: "lymph nodes", correct: false },
      { text: "hair sac", correct: false },
      { text: "subcutaneous tissue", correct: true },
      { text: "sweat glands", correct: false },
      { text: "sebaceous glands", correct: false }
    ]
  },
  {
    question: "Risk factor in the occurrence of hydradenitis is",
    answers: [
      { text: "an anxiety about the outcome of the disease", correct: false },
      { text: "hypovitaminosis", correct: false },
      { text: "non-compliance with personal hygienenon-compliance with personal hygiene", correct: true },
      { text: "hypervitaminosis", correct: false },
      { text: "a dry skin", correct: false }
    ]
  },
  {
    question: "An acute purulent surgical infection is most often caused by",
    answers: [
      { text: "streptococcus", correct: false },
      { text: "Risk Assessment and Mitigation", correct: false },
      { text: "E.coli", correct: false },
      { text: "staphylococcus", correct: true },
      { text: "clostridium", correct: false }
    ]
  },
  {
    question: "When the inflammatory infiltrate softens, you should",
    answers: [
      { text: "make a wide incision and drainage", correct: true },
      { text: "apply a compress with Vishnevsky ointment", correct: false },
      { text: "apply an ice bubble", correct: false },
      { text: "apply a heating pad", correct: false },
      { text: "apply Levomekol ointment", correct: false }
    ]
  },
  {
    question: "After opening the abscess, a bandage is applied with",
    answers: [
      { text: "Vishnevsky ointment ", correct: false },
      { text: "Prednisolone ointment", correct: false },
      { text: "3% hydrogen peroxide solution", correct: false },
      { text: "hypertonic sodium chloride solution", correct: true },
      { text: "Levomekol ointment", correct: false }
    ]
  },
  {
    question: "Surgical treamtent of gas gangrene is",
    answers: [
      { text: " necretomy", correct: false },
      { text: "sequestrectomy", correct: false },
      { text: "lamp incisions", correct: true },
      { text: "removal of the necrotic rod", correct: false },
      { text: "Vishnevsky ointmen", correct: false }
    ]
  },
  {
    question: "The priority problem of the patient with carbuncle is",
    answers: [
      { text: "an insomnia", correct: false },
      { text: "Providing legal frameworks", correct: false },
      { text: "an anxiety about his condition", correct: false },
      { text: "a pain in the carbuncle area", correct: true },
      { text: "a restriction of movements in the affected part of the body", correct: false }
    ]
  },
  {
    question: "In the inflammatory process at the stage of infiltration, antibacterial therapy is and",
    answers: [
      { text: "physiotherapy", correct: true },
      { text: "a bandage with a hypertonic sodium chloride", correct: false },
      { text: "opening of the infiltrate", correct: false },
      { text: "puncture of the infiltrate", correct: false },
      { text: "operation - opening of the abscess", correct: false }
    ]
  },
  {
    question: "With a carbuncle of the neck, all of the above is shown, except",
    answers: [
      { text: "antibiotics intramuscularly", correct: false },
      { text: "sulfonamide preparations inside", correct: false },
      { text: "a warming compress with Vishnevsky ointment", correct: true },
      { text: "vitamin therapy", correct: false },
      { text: "physiotherapy", correct: false }
    ]
  },
  {
    question: "Furuncle is an acute purulent-necrotic inflammation of the hair follicles of the surrounding fiber and",
    answers: [
      { text: "apocrine glands", correct: false },
      { text: "lymphatic glands", correct: false },
      { text: "sebaceous glands", correct: true },
      { text: "sweat glands", correct: false },
      { text: "merocrine glands", correct: false }
    ]
  },
  {
    question: "When a furuncle is localized on the face, there is a threat of purulent meningitis, while the infection enters the cerebral sinuses through the vein system",
    answers: [
      { text: "V. subclavia", correct: false },
      { text: "V. jugularis anterior", correct: false },
      { text: "V. angularis oculi", correct: true },
      { text: "V. anonyma", correct: false },
      { text: "V. axillaris", correct: false }
    ]
  },
  {
    question: "The causative agent of the gas gangrene is",
    answers: [
      { text: "Pseudomonas aeruginosa", correct: false },
      { text: "Clostridium", correct: true },
      { text: "Tetanus bacillus", correct: false },
      { text: "Proteus", correct: false },
      { text: "Staphylococcus", correct: false }
    ]
  },
  {
    question: "Early clinical signs of anaerobic soft tissue infection are",
    answers: [
      { text: "hyperemia", correct: false },
      { text: "light pink skin color", correct: false },
      { text: "local edema", correct: false },
      { text: "pale gray skin color", correct: true },
      { text: "dull pain", correct: false }
    ]
  },
  {
    question: "The triggering causes of the development of the anaerobic soft tissue infections are",
    answers: [
      { text: "peripheral macroangiography", correct: false },
      { text: "kidney failure", correct: false },
      { text: "myocarditis", correct: false },
      { text: "pernicious anemia", correct: false },
      { text: "operation", correct: true }
    ]
  },
  {
    question: "A limited accumulation of pus in the tissues is",
    answers: [
      { text: "a hematoma", correct: false },
      { text: "a phlegmon", correct: false },
      { text: "an abscess", correct: true },
      { text: "an atheroma ", correct: false },
      { text: "a furuncle", correct: false }
    ]
  },
  {
    question: "Treatment of the furuncle includes all of the above, except",
    answers: [
      { text: "wiping the surrounding skin with 70% alcoho", correct: false },
      { text: "in the presence of necrosis - squeezing and dressing with a hypertonic solution of table salt", correct: true },
      { text: "pricking with penicillin with novocaine around the inflammatory infiltrate", correct: false },
      { text: "sulfonamide preparations inside", correct: false },
      { text: "vitamin therapy", correct: false }
    ]
  },
  {
    question: "The main method of a surgical treatment of an acute hematogenous osteomyelitis is",
    answers: [
      { text: "osteosynthesis", correct: false },
      { text: "osteoperforation", correct: true },
      { text: "skeletal traction", correct: false },
      { text: "amputation", correct: false },
      { text: "drainage", correct: false }
    ]
  },
  {
    question: "Treatment of an abscess in the infiltration stage is",
    answers: [
      { text: "a wide incision and drainage of the wound", correct: false },
      { text: "a puncture of the abscess with antibiotic administration", correct: false },
      { text: "an antibiotic therapy with physiotherapy", correct: true },
      { text: "an infusion therapy", correct: false },
      { text: "vitamin therapy", correct: false }
    ]
  },
  {
    question: "Extracorporeal detoxification methods are used in the treatment of",
    answers: [
      { text: "lymphangitis", correct: false },
      { text: "thrombophlebitis", correct: false },
      { text: "hydradenitis", correct: false },
      { text: "furuncle", correct: false },
      { text: "sepsis", correct: true }
    ]
  },
  {
    question: "The psychological problem of a patient with erysipelas of the lower extremity is",
    answers: [
      { text: "an anxiety about the outcome of the disease", correct: true },
      { text: "a pain", correct: false },
      { text: "a restriction of movements", correct: false },
      { text: "a redness of the skin", correct: false },
      { text: "a muscle twitching", correct: false }
    ]
  },
  {
    question: "If, after opening the phlegmon, the patient has a high fever and chills for 3-4 days, it is necessary",
    answers: [
      { text: "prescribe antipyretic drugs", correct: false },
      { text: "prescribe X-ray therapy", correct: false },
      { text: "prescribe antibiotic therapy", correct: false },
      { text: "prescribe physiotherapy", correct: false },
      { text: "perform a revision of the wound and blood culture", correct: true }
    ]
  },
  {
    question: "Acute hematogenous osteomyelitis is an inflammation of",
    answers: [
      { text: "a finger", correct: false },
      { text: "a bone marrow and bones", correct: true },
      { text: "a knee joint", correct: false },
      { text: "venous vessels", correct: false },
      { text: " a skin", correct: false }
    ]
  },
  {
    question: "All acute purulent diseases of the bones and joints are characteristic of",
    answers: [
      { text: "reduction of ESR", correct: false },
      { text: "reduction of C-reactive protein", correct: false },
      { text: "leukocytosis", correct: true },
      { text: "erythrocytosis", correct: false },
      { text: "thrombocytosis", correct: false }
    ]
  },
  {
    question: "Hematogenous osteomyelitis may be a consequence of",
    answers: [
      { text: "a gunshot wound", correct: false },
      { text: "retroperitoneal phlegmons", correct: true },
      { text: "dull pain", correct: false },
      { text: "skeletal traction", correct: false },
      { text: "an open fracture", correct: false }
    ]
  },
  {
    question: "Biodegradable collagen-containing drugs are used in the treatment of",
    answers: [
      { text: "purulent arthritis", correct: false },
      { text: "purulent bursitis", correct: false },
      { text: "acute osteomyelitis", correct: false },
      { text: "chronic osteomyelitis", correct: true },
      { text: "hematogenous osteomyelitis", correct: false }
    ]
  },
  {
    question: "Hematogenic osteomyelitis is most characteristic of",
    answers: [
      { text: "adults aged between 18-50", correct: false },
      { text: "children from 1-18 years", correct: true },
      { text: "adults over 50 years", correct: false },
      { text: "children under 1 year", correct: false },
      { text: "newly-born babies", correct: false }
    ]
  },
  {
    question: "Surgical treatment of chronic osteomyelitis includes all, except",
    answers: [
      { text: "excision of bone sequesters", correct: false },
      { text: "scar tissue removal", correct: false },
      { text: "amputation of the affected part", correct: true },
      { text: "bone defect plastic", correct: false },
      { text: "fistula excision", correct: false }
    ]
  },
  {
    question: "The following methods are used to clarify the localization and prevalence of purulence in chronic fistula osteomyelitis",
    answers: [
      { text: "CT scan", correct: false },
      { text: "CT-fistulography", correct: true },
      { text: "MRI", correct: false },
      { text: "Ultrasound", correct: false },
      { text: "Blood tests", correct: false }
    ]
  },
  {
    question: "What antibiotic groups are used in the treatment of purulent arthritis?",
    answers: [
      { text: "carbapenems", correct: false },
      { text: "metronidazole", correct: false },
      { text: "fluoroquinolones", correct: false },
      { text: "aminoglycosides", correct: true },
      { text: "macrolides", correct: false }
    ]
  },
  {
    question: "What are the transmission pathways for acute osteomyelitis?",
    answers: [
      { text: "hematogenic", correct: false },
      { text: "lymphogenic", correct: false },
      { text: "air-borne", correct: false },
      { text: "post-traumatic", correct: true },
      { text: "contact", correct: false }
    ]
  },
  {
    question: "Osteosclerosis of bone occurs due to",
    answers: [
      { text: "decreased host resistance", correct: false },
      { text: "increase in the virulence of organisms causes infection", correct: false },
      { text: "occurs in immunocompromised patients", correct: false },
      { text: "hyper parathyroidism", correct: false },
      { text: "increased host response", correct: true }
    ]
  },
  {
    question: "Osteosarcoma characteristically may develop in some causes of",
    answers: [
      { text: "osteopetrosis", correct: false },
      { text: "osteogenesis imperfecta", correct: false },
      { text: "acromegaly", correct: false },
      { text: "osteitis deformans", correct: true },
      { text: "fibrous dysplasia", correct: false }
    ]
  },
  {
    question: "Repeated surgical treatment of wounds for anaerobic soft tissue infection",
    answers: [
      { text: "must necessarily be completed with sutures;", correct: false },
      { text: "contraindicated", correct: false },
      { text: "indicates that the primary surgical treatment of the purulent focus was not radically performed", correct: false },
      { text: "can be carried out repeatedly during the treatment process", correct: true },
      { text: "must be discharged home", correct: false }
    ]
  },
  {
    question: "If there is phlegmon of the foot and leg with signs of the presence of anaerobes, the first step should be",
    answers: [
      { text: "amputation according to N. I. Pirogov;", correct: false },
      { text: "amputation of the affected limb at the level of the middle third of the thigh", correct: false },
      { text: "surgical treatment of purulent foci of the foot and leg with open postoperative wound management", correct: true },
      { text: "revascularization of the affected limb", correct: false },
      { text: " primary surgical treatment of the foot", correct: false }
    ]
  },
  {
    question: "A contraindication to reconstructive and plastic surgery after anaerobic soft tissue infection is",
    answers: [
      { text: "the patient’s continuing extremely serious general condition", correct: true },
      { text: "patient’s age", correct: false },
      { text: "risk of relapse", correct: false },
      { text: "risk of complications", correct: false },
      { text: "patient's gender", correct: false }
    ]
  },
  {
    question: "Indicate the most common pathogens of purulent infection",
    answers: [
      { text: "Staphylococci and streptococc", correct: true },
      { text: "Anaerobic non-clostridial flora", correct: false },
      { text: "Anaerobic clostridial flora", correct: false },
      { text: "Escherichia coli and Proteus vulgaris", correct: false },
      { text: "Pseudomonas aeruginosa", correct: false }
    ]
  },
  {
    question: "What conditions are preferable for the growth of anaerobic bacteria?",
    answers: [
      { text: "High oxygen levels", correct: false },
      { text: "Low humidity", correct: false },
      { text: "Availability of ligh", correct: false },
      { text: "Low oxygen levels", correct: true },
      { text: "High levels of ultraviolet rays", correct: false }
    ]
  },
  {
    question: "What factors contribute to the development of anaerobic infections?",
    answers: [
      { text: "Use of antibiotics", correct: false },
      { text: "The presence of wounds isolated from oxygen", correct: true },
      { text: "Prolonged exposure to cold climates", correct: false },
      { text: "Eating a lot of fruit", correct: false },
      { text: "Assessing compliance with regulations", correct: false }
    ]
  },
  {
    question: "Which disease is an example of a specific infection?",
    answers: [
      { text: "Diabetes mellitus", correct: false },
      { text: "Fever", correct: false },
      { text: "Gastritis", correct: false },
      { text: "Tuberculosis", correct: true },
      { text: "Flu", correct: false }
    ]
  },
  {
    question: "Which of the following methods is commonly used to diagnose specific infections?",
    answers: [
      { text: "MRI (magnetic resonance imaging", correct: false },
      { text: "ECG (electrocardiography)", correct: false },
      { text: "Culture and analysis", correct: true },
      { text: "Endoscopy", correct: true },
      { text: "Radiography", correct: false }
    ]
  },
  {
    question: "Which of the following diseases are caused by specific infections?",
    answers: [
      { text: "Lymphadenitis", correct: false },
      { text: "Flu", correct: false },
      { text: "Diarrhea", correct: false },
      { text: "Malaria", correct: true },
      { text: "Osteoarthritis", correct: false }
    ]
  },
  {
    question: "What organisms are anaerobic bacteria?",
    answers: [
      { text: "Streptococcus", correct: false },
      { text: "Escherichia coli", correct: false },
      { text: "Clostridiums", correct: true },
      { text: "Staphylococcus aureus", correct: false },
      { text: "Pseudomonas aeruginosa", correct: false }
    ]
  },
  {
    question: "Atherosclerosis of the vessels of the extremities leads to",
    answers: [
      { text: "erysipelas", correct: false },
      { text: "varicose veins", correct: false },
      { text: "gangrene", correct: false },
      { text: "arthrosis", correct: false },
      { text: "ascites", correct: true }
    ]
  },
  {
    question: "Anticoagulants are not used for",
    answers: [
      { text: "thrombophlebitis", correct: false },
      { text: "beginning gangrene", correct: false },
      { text: "endarteritis", correct: false },
      { text: "obliterating atherosclerosis", correct: true },
      { text: "thromboembolism", correct: false }
    ]
  },
  {
    question: "With wet gangrene there is no",
    answers: [
      { text: "demarcation shaft", correct: true },
      { text: "intoxication", correct: false },
      { text: "marbling of the skin", correct: false },
      { text: "pain", correct: false },
      { text: "By promoting worker comfort and efficiency", correct: false }
    ]
  },
  {
    question: "When conservatively treating a trophic ulcer of the limb, the following is necessary:",
    answers: [
      { text: "careful cleaning of the ulcer surface and the skin around the ulcer;", correct: true },
      { text: "bed rest, position with lowered limb", correct: false },
      { text: "stopping the outflow of discharge from the ulcer into the bandage;", correct: false },
      { text: "dressings with salicylic ointment", correct: false },
      { text: "applying a warm compress to the ulcer", correct: false }
    ]
  },
  {
    question: "Specify a mechanical factor that does not cause tissue necrosis",
    answers: [
      { text: "compression by a foreign body", correct: false },
      { text: "compression with a hemostatic tourniquet for more than 2-3 hours;", correct: false },
      { text: "washing the purulent wound with a pulsating stream of antiseptic", correct: true },
      { text: "torsion or infringement of an organ", correct: false },
      { text: "trauma with damage to blood vessels and nerves", correct: false }
    ]
  },
  {
    question: "Wet gangrene is especially severe in patients: ",
    answers: [
      { text: "obliterating endarteritis", correct: false },
      { text: "furunculosis", correct: false },
      { text: "hematogenous osteomyelitis", correct: false },
      { text: "bone tuberculosis", correct: false },
      { text: "diabetes mellitus", correct: true }
    ]
  },
  {
    question: "Nonspecific gangrene develops when",
    answers: [
      { text: "clostridial infection", correct: false },
      { text: "diabetes mellitus", correct: false },
      { text: "ergot poisoning", correct: false },
      { text: " thrombosis or embolism of a large vessel", correct: false },
      { text: "syphilis", correct: true }
    ]
  },
  {
    question: "For a patient with gangrene of the abdominal organs (gallbladder, intestine, etc.), the following is first of all indicated",
    answers: [
      { text: "administration of large doses of antibiotics", correct: false },
      { text: "administration of antispasmodics", correct: false },
      { text: "administration of painkillers", correct: false },
      { text: "emergency laparotomy with removal of the affected organ", correct: true },
      { text: "administration of anticoagulants;", correct: false }
    ]
  },
  {
    question: "Specify the time after injury within which replantation of individual fingers is possible under cold preservation conditions:",
    answers: [
      { text: "6-8 hours;", correct: false },
      { text: "18-24 hours", correct: true },
      { text: "8-10 hours", correct: false },
      { text: "10-14 hours", correct: false },
      { text: "14-18 hours", correct: false }
    ]
  },
  {
    question: "There are bedsores",
    answers: [
      { text: "hidden and obvious;", correct: false },
      { text: "iatrogenic and pathological;", correct: false },
      { text: "endogenous and exogenous", correct: false },
      { text: "erythematous, bullous, phlegmonous and necrotic", correct: false },
      { text: "acute, subacute, chronic and recurrent", correct: true }
    ]
  },
  {
    question: "An external artificial fistula is",
    answers: [
      { text: "tracheoesophageal;", correct: false },
      { text: "Rgastrostomy", correct: true },
      { text: "arteriovenous shunt", correct: false },
      { text: "choledochoduodenoanastomosis", correct: false },
      { text: "urachus", correct: false }
    ]
  },
  {
    question: "Of the following forms of gas gangrene does not occur",
    answers: [
      { text: "edematous", correct: false },
      { text: "necrotic", correct: false },
      { text: "phlegmonous", correct: false },
      { text: "emphysematous", correct: false },
      { text: "bullous", correct: true }
    ]
  },
  {
    question: "Which of the following is a typical sign of pain? ",
    answers: [
      { text: "Feeling of warmth in the area of injury", correct: false },
      { text: "Unpleasant sensation or discomfort", correct: false },
      { text: "A feeling of pleasant warmth at the site of injury", correct: false },
      { text: "Lightness in the area of damage", correct: true },
      { text: "None of the above", correct: false }
    ]
  },
  {
    question: "What types of pain are there?",
    answers: [
      { text: "Physiological and psychological pain", correct: false },
      { text: "Acute and chronic pain", correct: true },
      { text: "Pleasant and unpleasant pain ", correct: false },
      { text: "Superficial and deep pain", correct: false },
      { text: "Evaluate ventilation systems", correct: false }
    ]
  },
  {
    question: "What characterizes chronic pain?",
    answers: [
      { text: "Rapid onset and short duration", correct: false },
      { text: "Acute pain after injur", correct: false },
      { text: "Pain that goes away without treatment", correct: false },
      { text: "Constant presence of pain for more than six months", correct: true },
      { text: "Unexplained sensations in the area of injury", correct: false }
    ]
  },
  {
    question: "What is the function of pain in the body?",
    answers: [
      { text: "Prevention of treatment", correct: false },
      { text: "Suppression of emotions", correct: false },
      { text: "Defensive reaction, warning of danger and stimulating protective reflexes", correct: true },
      { text: "Increasing physical activity", correct: false },
      { text: "Blocking nerve impulses", correct: false }
    ]
  },
  {
    question: "What is the definition of pain?",
    answers: [
      { text: "Physiological process of signal transmission in the brain", correct: false },
      { text: "An unpleasant sensation or emotion associated with actual or potential tissue damage", correct: false },
      { text: "Emotional reaction to trauma", correct: true },
      { text: "Feeling of discomfort in any part of the body", correct: false },
      { text: "The healing process of damaged tissues", correct: false }
    ]
  },
  {
    question: "Which of the following is a typical sign of neuropathic pain?",
    answers: [
      { text: "Throbbing pain ", correct: false },
      { text: "Burning, numb area ", correct: true },
      { text: "Aching and dull pain", correct: false },
      { text: "Burning and tingling", correct: false },
      { text: "Acute, local pains", correct: false }
    ]
  },
  {
    question: "What drug is most often used to treat acute severe pain? ",
    answers: [
      { text: "Aspirin", correct: false },
      { text: "Ibuprofen", correct: false },
      { text: "Morphine", correct: true },
      { text: "Paracetamol", correct: false },
      { text: "Naproxen", correct: false }
    ]
  },
  {
    question: "Which neurotransmitter is most often associated with pain signaling in the nervous system?",
    answers: [
      { text: "Acetylcholine", correct: false },
      { text: "Glutamate", correct: true },
      { text: "Serotonin", correct: false },
      { text: "Dopamine", correct: false },
      { text: " Gamma-aminobutyric acid (GABA)", correct: false }
    ]
  },
  {
    question: "Which of the following anesthesia methods blocks pain in a specific part of the body by blocking pain signals along the peripheral nerves?",
    answers: [
      { text: "Epidural anesthesia", correct: false },
      { text: "Local anesthesia", correct: false },
      { text: "Spinal anesthesia", correct: false },
      { text: "Conduction anesthesia", correct: true },
      { text: "Intraossous anesthesia ", correct: false }
    ]
  },
  {
    question: "What factor most often causes acute pain during inflammation of internal organs?",
    answers: [
      { text: "Increased blood pressure", correct: false },
      { text: "Intestinal dilatation ", correct: false },
      { text: "Decreased heart rate", correct: false },
      { text: "RStretching of the organ capsule", correct: true },
      { text: "Dehydration of the body", correct: false }
    ]
  },
  {
    question: "What is the primary mechanism of action of local anesthetics?",
    answers: [
      { text: " Central nervous system depression ", correct: false },
      { text: "Blockade of sodium channels", correct: false },
      { text: "Inhibition of prostaglandin synthesis", correct: true },
      { text: "RModulation of opioid receptors", correct: false },
      { text: "Enhancement of GABAergic transmission", correct: false }
    ]
  },
  {
    question: "What is the most common adverse reaction associated with the use of local anesthetics?",
    answers: [
      { text: "Hypertension", correct: false },
      { text: "Allergic reactions", correct: true },
      { text: "Hypotension", correct: false },
      { text: "Bradycardia", correct: false },
      { text: "Hyperglycemia", correct: false }
    ]
  },
  {
    question: "How does vasoconstrictors, such as epinephrine, enhance the effect of local anesthetics?",
    answers: [
      { text: "By directly blocking sodium channels", correct: false },
      { text: "By increasing the duration of action", correct: true },
      { text: "By inhibiting prostaglandin synthesis", correct: false },
      { text: "By promoting vasodilation", correct: false },
      { text: "By enhancing GABAergic transmission", correct: false }
    ]
  },
  {
    question: "Which of the following statements regarding the reversal of local anesthesia is accurate?",
    answers: [
      { text: "Administration of opioids can reverse the effects of local anesthetics", correct: false },
      { text: "Administration of acetylcholinesterase inhibitors can reverse the effects of local anesthetics", correct: false },
      { text: "Vasoconstrictors can be used to reverse the effects of local anesthetics", correct: false },
      { text: "The effects of local anesthetics are irreversible once administered", correct: true },
      { text: "Increasing the dose of local anesthetic can reverse incomplete anesthesia", correct: false }
    ]
  },
  {
    question: "To avoid potential systemic effects, where should aspiration be performed during the administration of local anesthesia?",
    answers: [
      { text: "Intravascularly", correct: false },
      { text: "In the muscle", correct: false },
      { text: "In the subcutaneous tissue", correct: true },
      { text: "In the nerve", correct: false },
      { text: "In the adipose tissue", correct: false }
    ]
  },
  {
    question: " Which category of local anesthetics is commonly associated with a higher risk of allergic reactions? ",
    answers: [
      { text: "Esters", correct: false },
      { text: "Amides", correct: false },
      { text: "Opioids", correct: true },
      { text: "Barbiturates", correct: false },
      { text: "Benzodiazepines", correct: false }
    ]
  },
  {
    question: "Patient has a history of a mild allergy to a specific local anesthetic agent. How should doctor proceed in selecting the appropriate local anesthetic for the procedure?",
    answers: [
      { text: "Choose an alternative local anesthetic from a different class", correct: false },
      { text: " Proceed with the planned local anesthetic and closely monitor for allergic reactions", correct: false },
      { text: "Switch to general anesthesia to avoid any potential allergic responses", correct: false },
      { text: "Use the same local anesthetic, but administer an antihistamine prophylactically", correct: true },
      { text: "Consult the patient's primary care physician for advice on the allergy", correct: false }
    ]
  },
  {
    question: "Considering the expected duration of the hand surgery, what type of local anesthetic should surgeon select to ensure a sufficient duration of action without the need for frequent reinjection?",
    answers: [
      { text: "Short-acting ester", correct: false },
      { text: "Long-acting ester", correct: false },
      { text: "Intermediate-acting amide", correct: true },
      { text: "Short-acting amide", correct: false },
      { text: "Short-acting Intermediate-acting ester", correct: false }
    ]
  },
  {
    question: "The surgical procedure involves the distal aspect of the hand. What is the most appropriate site for surgeon to administer the local anesthesia to achieve effective pain control??",
    answers: [
      { text: "Proximal to the surgical site", correct: false },
      { text: "Directly at the surgical site", correct: true },
      { text: "In the palm of the hand", correct: false },
      { text: " In the dorsum of the hand", correct: false },
      { text: "In the forearm proximal to the wrist", correct: false }
    ]
  },
  {
    question: "During the surgical procedure, patient reports feeling a sharp pain despite the administration of local anesthesia. What could be a potential explanation for this unexpected sensation??",
    answers: [
      { text: "Patient's heightened pain threshold", correct: false },
      { text: "Delayed onset of action of the local anesthetic", correct: false },
      { text: "Presence of a tourniquet interfering with local anesthetic distribution", correct: false },
      { text: "Prolonged exposure to coal dust", correct: false },
      { text: "Inadequate dose of local anesthetic", correct: true }
    ]
  },
  {
    question: "What is the primary purpose of induction agents in general anesthesia?",
    answers: [
      { text: "Analgesia", correct: false },
      { text: "Loss of consciousness", correct: false },
      { text: "Muscle relaxation", correct: true },
      { text: "Breathing difficulties", correct: false },
      { text: "Anterograde amnesiat", correct: false }
    ]
  },
  {
    question: "In the context of neuromuscular blockade, what is the role of acetylcholinesterase inhibitors?",
    answers: [
      { text: "Prolong the duration of muscle relaxation", correct: false },
      { text: "Enhance the effects of neuromuscular blockers", correct: false },
      { text: "Reverse the effects of neuromuscular blockade", correct: true },
      { text: "Act as a primary muscle relaxant", correct: false },
      { text: "Induce sedation", correct: false }
    ]
  },
  {
    question: "During general anesthesia, which monitoring parameter is essential to assess the adequacy of ventilation?",
    answers: [
      { text: "Blood pressure", correct: false },
      { text: "Heart rate", correct: false },
      { text: "Oxygen saturation (SpO2)", correct: false },
      { text: "Electrocardiogram (ECG)", correct: false },
      { text: "End-tidal carbon dioxide (ETCO2)", correct: true }
    ]
  },
  {
    question: "While under general anesthesia, the patient experiences a sudden drop in blood pressure. What is the most appropriate initial intervention?",
    answers: [
      { text: "Administer a vasopressor medication", correct: true },
      { text: "Administer a bolus of crystalloid fluids", correct: false },
      { text: "Increase the depth of anesthesia.", correct: false },
      { text: "Notify the surgeon to expedite the procedure", correct: false },
      { text: "Discontinue anesthesia to assess the patient's responsiveness", correct: false }
    ]
  },
  {
    question: "What is the primary goal of airway management during general anesthesia induction?",
    answers: [
      { text:  "Promotion of patient comfort", correct: false },
      { text: "Maintenance of vocal cord function", correct: false },
      { text: "Prevention of gastric aspiration", correct: true },
      { text: " Facilitation of communication", correct: false },
      { text: "Relaxation of muscles", correct: false }
    ]
  },
  {
    question: "Upon arrival in the post-anesthesia care unit (PACU), what aspect should be closely monitored in a patient recovering from general anesthesia?",
    answers: [
      { text: "Depth of anesthesia", correct: false },
      { text: "Onset of neuromuscular blockade", correct: false },
      { text: "Intravenous access for induction agents.", correct: false },
      { text: "Administration of inhaled anesthetics", correct: false },
      { text: "Resumption of normal breathing",correct: true }
    ]
  },
  {
    question: "Which physiological manifestation characterizes the excitement phase of anesthesia induction?",
    answers: [
      { text: "Rapid, irregular breathing", correct: true },
      { text: "Hypertension", correct: false },
      { text: "Slow heart rate", correct: false },
      { text: "Dilated pupils", correct: false },
      { text: "Profound muscle relaxation", correct: false }
    ]
  },
  {
    question: "After confirming the absence of a pulse and the patient's unresponsiveness, what is the next step in initiating CPR?",
    answers: [
      { text: "Deliver two rescue breaths", correct: false },
      { text: "Assess for signs of life", correct: false },
      { text: "Start chest compressions", correct: true },
      { text: "Perform abdominal thrusts", correct: false },
      { text: "Administer an AED shock", correct: false }
    ]
  },
  {
    question: "While under general anesthesia, the patient experiences a sudden drop in blood pressure. What is the most appropriate initial intervention?",
    answers: [
      { text: "Increase the depth of anesthesia", correct: false },
      { text: "Administer a bolus of crystalloid fluids", correct: true },
      { text: "Administer a vasopressor medication", correct: false },
      { text: "Notify the surgeon to expedite the procedure", correct: false },
      { text: "Discontinue anesthesia to assess the patient's", correct: false }
    ]
  },
  {
    question: "While attempting to secure the patient's airway, surgeon encounters difficulty visualizing the vocal cords. What should be the immediate course of action?",
    answers: [
      { text: "Proceed with intubation using a stylet", correct: false },
      { text: "Administer a higher dose of induction agent", correct: false },
      { text: "Insert an oral airway to assist with visualization", correct: false },
      { text: " Consider using a supraglottic airway device.", correct: true },
      { text: "Change to a larger endotracheal tube", correct: false }
    ]
  },
  {
    question: "What is the name for the type of bandage that is used to hold a dressing in place on the foot or ankle?",
    answers: [
      { text: "Foot bandage", correct: false },
      { text: "Ankle bandage", correct: true },
      { text: "Toe bandage", correct: false },
      { text: "Leg bandage", correct: false },
      { text: "Knee bandage", correct: false }
    ]
  }     
]







const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz (){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    backButton.innerHTML = "Back";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    
    if(answer.correct){
        button.dataset.correct = answer.correct;  
    }
    button.addEventListener("click", selectAnswer)

})
}


function resetState(){
nextButton.style.display = "none";
backButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);

}
}

function selectAnswer(e){

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
    selectedBtn.classList.add("inCorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    backButton.style.display = "inline";

}


function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Solve Again";
    nextButton.style.display = "inline"
    backButton.style.display = "inline"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else { showScore()}
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length) {
    handleNextButton();
    } else{
        startQuiz();
    }
});

function handlebackButton(){
  currentQuestionIndex--;
  if(currentQuestionIndex < questions.length){
      showQuestion();
  } else { showScore()}
}

backButton.addEventListener("click", ()=>{
  if(currentQuestionIndex < questions.length) {
  handlebackButton();
  } else{
      startQuiz();
  }
});
startQuiz();