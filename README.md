## Mental Health Application Using Explainable Artificial Intelligence (XAI)

## Description:

The Mental Health Application using XAI is a web-based system designed to assess stress, anxiety, and depression levels using machine learning while ensuring transparency through explainable AI techniques. The application enhances trust by clearly explaining how predictions are generated, supporting early awareness and mental well-being.

## About

Mental health plays a vital role in overall well-being, influencing productivity, relationships, and quality of life. However, many individuals hesitate to seek professional help due to stigma, lack of accessibility, or unawareness of early symptoms.

This project proposes a web-based mental health assessment system that utilizes Machine Learning (ML) models to predict mental health conditions such as stress, anxiety, and depression based on questionnaire responses and user inputs.

To overcome the lack of transparency in traditional AI systems, Explainable Artificial Intelligence (XAI) techniques are integrated to provide clear and interpretable explanations for every prediction. This improves user trust and supports professionals in understanding AI-driven results.

## Target Users

- Individuals seeking self-assessment
- Students and working professionals
- Mental health professionals
- Institutions focusing on preventive mental health monitoring

## Data Description

- Standardized datasets for stress, anxiety, and depression
- Questionnaire responses and numerical indicators
- Preprocessing includes cleaning, normalization, and feature selection
- Encrypted storage of sensitive user inputs
- No clinical or biometric data used

## Methodology

- Data Collection: Standard mental health datasets and questionnaire inputs
- Data Preprocessing: NLP techniques for text inputs, Standardization of numerical scores
-  ML-Based Prediction: Classification into mental health severity levels
-  Explainable AI (XAI): SHAP and LIME to interpret predictions visually
-  Sentiment & Emotion Analysis: Emotion detection from chat and diary entries
-  Personalized Recommendations: Self-care tips based on predictions
-  Mood Tracking & Pattern Analysis: Behavioral trend visualization
-  Privacy & Security: Encryption, anonymization, and secure storage

## Features

- AI-based prediction of stress, anxiety, and depression levels
- Integration of Explainable AI (XAI) for transparent decision-making
- Questionnaire-based mental health assessment
- Sentiment and emotion analysis from user inputs
- Visual explanations using feature importance graphs
- Personalized mental wellness recommendations
- Secure handling and storage of sensitive user data
- Scalable web-based architecture

## Requirements
<!--List the requirements of the project as shown below-->
* Operating System: Requires a 64-bit OS (Windows 10 or Ubuntu) for compatibility with deep learning frameworks.
* Hardware & OS: 64-bit Operating System (Windows 11)
* Programming Language: Python 3.6 or later
* Frontend: HTML, CSS, JavaScript
* Backend: Flask / Django
* Machine Learning Libraries: TensorFlow (v2.4.1), scikit-learn, NumPy, Pandas
* Explainable AI Tools: SHAP, LIME
* Visualization: Matplotlib, Seaborn
* IDE: Visual Studio Code
* Version Control: Git

## System Architecture
<img width="1103" height="687" alt="image" src="https://github.com/user-attachments/assets/117165a8-d5e4-467b-96b0-2298c280c07f" />

## Output

<!--Embed the Output picture at respective places as shown below as shown below-->
#### Output1 - LOGIN PAGE
<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/23cae3a7-822d-471a-a8d3-3d264c1ace8b" />

#### Output2 - DASHBOARD/HOME PAGE
<img width="1919" height="1023" alt="image" src="https://github.com/user-attachments/assets/a899359b-be2b-4c8f-8921-70fe1ed3b5a7" />

#### Output3 - CHATBOT PAGE
<img width="1917" height="1021" alt="image" src="https://github.com/user-attachments/assets/401abeb0-ce28-437d-9d45-941bfbe1a538" />

#### Output4 - MENTAL HEALTH ASSESSMENT SCREENING PAGE
<img width="1919" height="1022" alt="image" src="https://github.com/user-attachments/assets/c8a98bf1-b659-4c44-80a5-1407fb310391" />

#### Output5 - BOOK APPOINTMENT PAGE
<img width="1919" height="1027" alt="image" src="https://github.com/user-attachments/assets/7cc8f665-2ccb-4d22-995b-520bbdc6766a" />

#### Output6 - APPOINTMENT CONFIRMATION PAGE
<img width="1917" height="1026" alt="image" src="https://github.com/user-attachments/assets/36abaa16-4dcd-4770-9718-15437a72ec0b" />

#### Output7 - RESOURCES PAGE
<img width="1918" height="1024" alt="image" src="https://github.com/user-attachments/assets/168597de-4f58-4eff-b7f6-c8f663fa3e69" />

``` Model Accuracy: ~96% (may vary based on dataset and evaluation) ```

## Inclusions

- User authentication
- Questionnaire-based assessment
- AI-based prediction
- Explainable outputs (XAI graphs)
- Personalized awareness recommendations

## Exclusions

- Clinical diagnosis or therapy replacement
- Wearable or real-time biometric data
- Severe psychiatric disorder detection
- Voice/video emotion analysis

## Limitations

- Depends on self-reported user data
- Accuracy may vary with biased responses
- Not a medical diagnostic tool
- Limited to basic mental health conditions

## Results and Impact
- Improves awareness and early detection of mental health issues
- Enhances user trust through explainable predictions
- Supports mental health professionals with interpretable insights
- Encourages self-assessment and preventive care
- Promotes responsible and transparent AI usage in healthcare

This application serves as a foundation for ethical AI-driven mental health systems and can be extended with real-time monitoring and advanced analytics in the future.

## Articles published / References
1. World Health Organization, Depression and Other Common Mental Disorders: Global Health Estimates. Geneva, Switzerland: WHO Press, 2017.
2. J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova, “BERT: Pre-training of deep bidirectional transformers for language understanding,” in Proc. NAACL-HLT, Minneapolis, MN, USA, 2019, pp. 4171–4186.
3. Y. Liu et al., “RoBERTa: A robustly optimized BERT pretraining approach,” arXiv preprint arXiv:1907.11692, 2019.
4. G. Coppersmith, M. Dredze, and C. Harman, “Quantifying mental health signals in Twitter,” in Proc. ACL Workshop Comput. Linguist. Clin. Psychol., Baltimore, MD, USA, 2014, pp. 51–60.
5. P. Resnik et al., “The CLPsych 2015 shared task: Depression and PTSD on Twitter,” in Proc. ACL Workshop Comput. Linguist. Clin. Psychol., Denver, CO, USA, 2015, pp. 31–39.
6. J. W. Pennebaker, R. J. Booth, R. L. Boyd, and M. E. Francis, Linguistic Inquiry and Word Count: LIWC2015. Austin, TX, USA: Pennebaker Conglomerates, 2015.
7. M. T. Ribeiro, S. Singh, and C. Guestrin, “"Why should I trust you?": Explaining the predictions of any classifier,” in Proc. 22nd ACM SIGKDD Int. Conf. Knowl. Discov. Data Min., San Francisco, CA, USA, 2016, pp. 1135–1144.
8. S. M. Lundberg and S.-I. Lee, “A unified approach to interpreting model predictions,” in Adv. Neural Inf. Process. Syst. (NeurIPS), vol. 30, 2017.
9. M. Sundararajan, A. Taly, and Q. Yan, “Axiomatic attribution for deep networks,” in Proc. 34th Int. Conf. Mach. Learn. (ICML), Sydney, Australia, 2017, pp. 3319–3328.
10. B. Kim et al., “Interpretability beyond feature attribution: Quantitative testing with concept activation vectors (TCAV),” in Proc. 35th Int. Conf. Mach. Learn. (ICML), Stockholm, Sweden, 2018, pp.  2668–2677.
11. R. Guidotti et al., “A survey of methods for explaining black box models,” ACM Comput. Surv., vol. 51, no. 5, pp. 1–42, 2018.
12. A . Ghorbani, A. Abid, and J. Zou, “Interpretation of neural networks is fragile,” in Proc. AAAI Conf. Artif. Intell., Honolulu, HI, USA, 2019, pp. 3681–3688.
13. D. Alvarez-Melis and T. S. Jaakkola, “On the robustness of interpretability methods,” in Proc. ICML Workshop Human Interpretability Mach. Learn., 2018.
14. M. Zhou, S. Chen, and S. Tan, “Robustness of explanation methods for text classification,” IEEE Access, vol. 9, pp. 100841–100854, 2021.
15. A. Jacovi and Y. Goldberg, “Towards faithfully interpretable NLP systems: How should we define and evaluate faithfulness?” in Proc. ACL, Online, 2020, pp. 4198–4205.
16. S. Tonekaboni et al., “What clinicians want: Contextualizing explainable machine learning for clinical end use,” in Proc. Mach. Learn. Healthc. (MLHC), Ann Arbor, MI, USA, 2019.
17. A. Holzinger et al., “What do we need to build explainable AI systems for the medical domain?” arXiv preprint arXiv:1712.09923, 2017.
18. J. K. E. Steyaert et al., “Explainable AI in mental health: Opportunities, challenges, and future directions,” IEEE Trans. Artif. Intell., vol. 3, no. 4, pp. 390–403, Aug. 2022.
19. U. Bhatt et al., “Explainable machine learning in deployment,” in Proc. ACM Conf. Fairness, Accountab., Transparency (FAccT), Barcelona, Spain, 2020, pp. 648–657.
20. T. Miller, “Explanation in artificial intelligence: Insights from the social sciences,” Artif. Intell., vol. 267, pp. 1–38, 2019.
21. A. Rudin, “Stop explaining black box models for high stakes decisions and use interpretable models instead,” Nat. Mach. Intell., vol. 1, no. 5, pp. 206–215, 2019.
22. H. Meng et al., “Depression recognition based on dynamic facial and vocal expression features using deep learning,” IEEE Trans. Affect. Comput., vol. 10, no. 3, pp. 1–14, 2019.
23. A. Benton, M. Mitchell, and D. Hovy, “Multi-task learning for mental health using social media text,” in Proc. NAACL-HLT, San Diego, CA, USA, 2016, pp. 152–162.
24. F. Doshi-Velez and B. Kim, “Towards a rigorous science of interpretable machine learning,” arXiv preprint arXiv:1702.08608, 2017.
25. J. Chancellor and M. De Choudhury, “Methods in predictive techniques for mental health status on social media,” IEEE Internet Comput., vol. 20, no. 6, pp. 62–70, 2016.




