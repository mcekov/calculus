// Data
const data = {
  countries: [
    {
      countryCode: "AD",
      country: "ANDORRA",
      zone: 4
    },
    {
      countryCode: "AE",
      country: "UNITED ARAB EMIRATES",
      zone: 7
    },
    {
      countryCode: "AF",
      country: "AFGHANISTAN",
      zone: 9
    },
    {
      countryCode: "AG",
      country: "ANTIGUA"
    },
    {
      countryCode: "AI",
      country: "ANGUILLA",
      zone: 9
    },
    {
      countryCode: "AL",
      country: "ALBANIA",
      zone: 4
    },
    {
      countryCode: "AM",
      country: "ARMENIA",
      zone: 5
    },
    {
      countryCode: "AN",
      country: "NETHERLANDS",
      zone: 2
    },
    {
      countryCode: "AO",
      country: "ANGOLA",
      zone: 9
    },
    {
      countryCode: "AR",
      country: "ARGENTINA",
      zone: 9
    },
    {
      countryCode: "AS",
      country: "AMERICAN SAMOA",
      zone: ""
    },
    {
      countryCode: "AT",
      country: "AUSTRIA",
      zone: 3
    },
    {
      countryCode: "AU",
      country: "AUSTRALIA",
      zone: 8
    },
    {
      countryCode: "AW",
      country: "ARUBA"
    },
    {
      countryCode: "AZ",
      country: "AZERBAIJAN",
      zone: 5
    },
    {
      countryCode: "BA",
      country: "BOSNIA AND HERZEGOVINA",
      zone: 4
    },
    {
      countryCode: "BB",
      country: "BARBADOS",
      zone: 9
    },
    {
      countryCode: "BD",
      country: "BANGLADESH",
      zone: 9
    },
    {
      countryCode: "BE",
      country: "BELGIUM",
      zone: 2
    },
    {
      countryCode: "BF",
      country: "BURKINA FASO"
    },
    {
      countryCode: "BH",
      country: "BAHRAIN",
      zone: 9
    },
    {
      countryCode: "BI",
      country: "BURUNDI"
    },
    {
      countryCode: "BJ",
      country: "BENIN",
      zone: 9
    },
    {
      countryCode: "BM",
      country: "BERMUDA",
      zone: 9
    },
    {
      countryCode: "BN",
      country: "BRUNEI"
    },
    {
      countryCode: "BO",
      country: "BOLIVIA"
    },
    {
      countryCode: "BR",
      country: "BRAZIL",
      zone: 6
    },
    {
      countryCode: "BS",
      country: "BAHAMAS",
      zone: 9
    },
    {
      countryCode: "BT",
      country: "BHUTAN",
      zone: 9
    },
    {
      countryCode: "BW",
      country: "BOTSWANA",
      zone: 9
    },
    {
      countryCode: "BY",
      country: "BELARUS",
      zone: 5
    },
    {
      countryCode: "BZ",
      country: "BELIZE",
      zone: 9
    },
    {
      countryCode: "CA",
      country: "CANADA",
      zone: 6
    },
    {
      countryCode: "CD",
      country: "CONGO, THE DEMOCRATIC REPUBLIC OF"
    },
    {
      countryCode: "CF",
      country: "CENTRAL AFRICAN REPUBLIC"
    },
    {
      countryCode: "CG",
      country: "CONGO",
      zone: 9
    },
    {
      countryCode: "CH",
      country: "SWITZERLAND",
      zone: 4
    },
    {
      countryCode: "CI",
      country: "COTE D IVOIRE"
    },
    {
      countryCode: "CK",
      country: "COOK ISLANDS",
      zone: 9
    },
    {
      countryCode: "CL",
      country: "CHILE",
      zone: 9
    },
    {
      countryCode: "CM",
      country: "CAMEROON",
      zone: 9
    },
    {
      countryCode: "CN",
      country: "CHINA, PEOPLES REPUBLIC",
      zone: 7
    },
    {
      countryCode: "CO",
      country: "COLOMBIA",
      zone: 9
    },
    {
      countryCode: "CR",
      country: "COSTA RICA",
      zone: 9
    },
    {
      countryCode: "CU",
      country: "CUBA",
      zone: 9
    },
    {
      countryCode: "CV",
      country: "CAPE VERDE",
      zone: 9
    },
    {
      countryCode: "CY",
      country: "CYPRUS",
      zone: 5
    },
    {
      countryCode: "CZ",
      country: "CZECH REPUBLIC, THE",
      zone: 3
    },
    {
      countryCode: "DE",
      country: "GERMANY",
      zone: 3
    },
    {
      countryCode: "DJ",
      country: "DJIBOUTI"
    },
    {
      countryCode: "DK",
      country: "DENMARK",
      zone: 3
    },
    {
      countryCode: "DM",
      country: "DOMINICA"
    },
    {
      countryCode: "DO",
      country: "DOMINICAN REPUBLIC",
      zone: 9
    },
    {
      countryCode: "DZ",
      country: "ALGERIA",
      zone: 9
    },
    {
      countryCode: "EC",
      country: "ECUADOR",
      zone: 9
    },
    {
      countryCode: "EE",
      country: "ESTONIA",
      zone: 4
    },
    {
      countryCode: "EG",
      country: "EGYPT",
      zone: 8
    },
    {
      countryCode: "ER",
      country: "ERITREA"
    },
    {
      countryCode: "ES",
      country: "SPAIN",
      zone: 3
    },
    {
      countryCode: "ET",
      country: "ETHIOPIA"
    },
    {
      countryCode: "FI",
      country: "FINLAND",
      zone: 4
    },
    {
      countryCode: "FJ",
      country: "FIJI"
    },
    {
      countryCode: "FK",
      country: "FALKLAND ISLANDS"
    },
    {
      countryCode: "FM",
      country: "MICRONESIA, FEDERATED STATES OF"
    },
    {
      countryCode: "FO",
      country: "FAROE ISLANDS",
      zone: 5
    },
    {
      countryCode: "FR",
      country: "FRANCE",
      zone: 2
    },
    {
      countryCode: "GA",
      country: "GABON"
    },
    {
      countryCode: "GB",
      country: "UNITED KINGDOM",
      zone: 3
    },
    {
      countryCode: "GD",
      country: "GRENADA"
    },
    {
      countryCode: "GE",
      country: "GEORGIA",
      zone: 5
    },
    {
      countryCode: "GF",
      country: "FRENCH GUYANA"
    },
    {
      countryCode: "GG",
      country: "GUERNSEY"
    },
    {
      countryCode: "GH",
      country: "GHANA"
    },
    {
      countryCode: "GI",
      country: "GIBRALTAR",
      zone: 5
    },
    {
      countryCode: "GL",
      country: "GREENLAND"
    },
    {
      countryCode: "GM",
      country: "GAMBIA"
    },
    {
      countryCode: "GN",
      country: "GUINEA REPUBLIC"
    },
    {
      countryCode: "GP",
      country: "GUADELOUPE"
    },
    {
      countryCode: "GQ",
      country: "GUINEA-EQUATORIAL"
    },
    {
      countryCode: "GR",
      country: "GREECE",
      zone: 1
    },
    {
      countryCode: "GT",
      country: "GUATEMALA"
    },
    {
      countryCode: "GU",
      country: "GUAM"
    },
    {
      countryCode: "GW",
      country: "GUINEA-BISSAU"
    },
    {
      countryCode: "GY",
      country: "GUYANA (BRITISH)"
    },
    {
      countryCode: "HK",
      country: "HONG KONG",
      zone: 7
    },
    {
      countryCode: "HN",
      country: "HONDURAS"
    },
    {
      countryCode: "HR",
      country: "CROATIA",
      zone: 3
    },
    {
      countryCode: "HT",
      country: "HAITI"
    },
    {
      countryCode: "HU",
      country: "HUNGARY",
      zone: 1
    },
    {
      countryCode: "IC",
      country: "CANARY ISLANDS, THE",
      zone: 5
    },
    {
      countryCode: "ID",
      country: "INDONESIA",
      zone: 7
    },
    {
      countryCode: "IE",
      country: "IRELAND, REPUBLIC OF",
      zone: 4
    },
    {
      countryCode: "IL",
      country: "ISRAEL",
      zone: 5
    },
    {
      countryCode: "IN",
      country: "INDIA",
      zone: 7
    },
    {
      countryCode: "IQ",
      country: "IRAQ",
      zone: 8
    },
    {
      countryCode: "IR",
      country: "IRAN (ISLAMIC REPUBLIC OF)",
      zone: 8
    },
    {
      countryCode: "IS",
      country: "ICELAND",
      zone: 5
    },
    {
      countryCode: "IT",
      country: "ITALY",
      zone: 3
    },
    {
      countryCode: "JE",
      country: "JERSEY"
    },
    {
      countryCode: "JM",
      country: "JAMAICA"
    },
    {
      countryCode: "JO",
      country: "JORDAN"
    },
    {
      countryCode: "JP",
      country: "JAPAN",
      zone: 7
    },
    {
      countryCode: "KE",
      country: "KENYA"
    },
    {
      countryCode: "KG",
      country: "KYRGYZSTAN"
    },
    {
      countryCode: "KH",
      country: "CAMBODIA"
    },
    {
      countryCode: "KI",
      country: "KIRIBATI"
    },
    {
      countryCode: "KM",
      country: "COMOROS"
    },
    {
      countryCode: "KN",
      country: "ST. KITTS"
    },
    {
      countryCode: "KP",
      country: "KOREA, THE D.P.R OF (NORTH K.)"
    },
    {
      countryCode: "KR",
      country: "KOREA, REPUBLIC OF (SOUTH K.)",
      zone: 7
    },
    {
      countryCode: "KV",
      country: "KOSOVO",
      zone: 4
    },
    {
      countryCode: "KW",
      country: "KUWAIT"
    },
    {
      countryCode: "KY",
      country: "CAYMAN ISLANDS"
    },
    {
      countryCode: "KZ",
      country: "KAZAKHSTAN"
    },
    {
      countryCode: "LA",
      country: "LAO PEOPLES DEMOCRATIC REPUBLIC"
    },
    {
      countryCode: "LB",
      country: "LEBANON"
    },
    {
      countryCode: "LC",
      country: "ST. LUCIA"
    },
    {
      countryCode: "LI",
      country: "LIECHTENSTEIN",
      zone: 4
    },
    {
      countryCode: "LK",
      country: "SRI LANKA"
    },
    {
      countryCode: "LR",
      country: "LIBERIA"
    },
    {
      countryCode: "LS",
      country: "LESOTHO"
    },
    {
      countryCode: "LT",
      country: "LITHUANIA",
      zone: 4
    },
    {
      countryCode: "LU",
      country: "LUXEMBOURG",
      zone: 2
    },
    {
      countryCode: "LV",
      country: "LATVIA",
      zone: 4
    },
    {
      countryCode: "LY",
      country: "LIBYA"
    },
    {
      countryCode: "MA",
      country: "MOROCCO",
      zone: 8
    },
    {
      countryCode: "MC",
      country: "MONACO"
    },
    {
      countryCode: "MD",
      country: "MOLDOVA, REPUBLIC OF",
      zone: 4
    },
    {
      countryCode: "ME",
      country: "MONTENEGRO, REPUBLIC OF",
      zone: 4
    },
    {
      countryCode: "MG",
      country: "MADAGASCAR"
    },
    {
      countryCode: "MH",
      country: "MARSHALL ISLANDS"
    },
    {
      countryCode: "MK",
      country: "MACEDONIA, REPUBLIC OF",
      zone: 2
    },
    {
      countryCode: "ML",
      country: "MALI"
    },
    {
      countryCode: "MM",
      country: "MYANMAR"
    },
    {
      countryCode: "MN",
      country: "MONGOLIA"
    },
    {
      countryCode: "MO",
      country: "MACAU"
    },
    {
      countryCode: "MP",
      country: "COMMONWEALTH NO. MARIANA ISLANDS"
    },
    {
      countryCode: "MQ",
      country: "MARTINIQUE"
    },
    {
      countryCode: "MR",
      country: "MAURITANIA"
    },
    {
      countryCode: "MS",
      country: "MONTSERRAT"
    },
    {
      countryCode: "MT",
      country: "MALTA",
      zone: 5
    },
    {
      countryCode: "MU",
      country: "MAURITIUS"
    },
    {
      countryCode: "MV",
      country: "MALDIVES"
    },
    {
      countryCode: "MW",
      country: "MALAWI"
    },
    {
      countryCode: "MX",
      country: "MEXICO",
      zone: 8
    },
    {
      countryCode: "MY",
      country: "MALAYSIA",
      zone: 7
    },
    {
      countryCode: "MZ",
      country: "MOZAMBIQUE"
    },
    {
      countryCode: "NA",
      country: "NAMIBIA"
    },
    {
      countryCode: "NC",
      country: "NEW CALEDONIA"
    },
    {
      countryCode: "NE",
      country: "NIGER"
    },
    {
      countryCode: "NG",
      country: "NIGERIA"
    },
    {
      countryCode: "NI",
      country: "NICARAGUA"
    },
    {
      countryCode: "NL",
      country: "NETHERLANDS, THE",
      zone: 2
    },
    {
      countryCode: "NO",
      country: "NORWAY",
      zone: 4
    },
    {
      countryCode: "NP",
      country: "NEPAL"
    },
    {
      countryCode: "NR",
      country: "NAURU, REPUBLIC OF"
    },
    {
      countryCode: "NU",
      country: "NIUE"
    },
    {
      countryCode: "NZ",
      country: "NEW ZEALAND",
      zone: 8
    },
    {
      countryCode: "OM",
      country: "OMAN"
    },
    {
      countryCode: "PA",
      country: "PANAMA"
    },
    {
      countryCode: "PE",
      country: "PERU"
    },
    {
      countryCode: "PF",
      country: "TAHITI"
    },
    {
      countryCode: "PG",
      country: "PAPUA NEW GUINEA"
    },
    {
      countryCode: "PH",
      country: "PHILIPPINES, THE",
      zone: 7
    },
    {
      countryCode: "PK",
      country: "PAKISTAN",
      zone: 7
    },
    {
      countryCode: "PL",
      country: "POLAND",
      zone: 3
    },
    {
      countryCode: "PR",
      country: "PUERTO RICO"
    },
    {
      countryCode: "PT",
      country: "PORTUGAL",
      zone: 4
    },
    {
      countryCode: "PW",
      country: "PALAU"
    },
    {
      countryCode: "PY",
      country: "PARAGUAY"
    },
    {
      countryCode: "QA",
      country: "QATAR"
    },
    {
      countryCode: "RE",
      country: "REUNION, ISLAND OF"
    },
    {
      countryCode: "RO",
      country: "ROMANIA",
      zone: 1
    },
    {
      countryCode: "RS",
      country: "SERBIA, REPUBLIC OF",
      zone: 4
    },
    {
      countryCode: "RU",
      country: "RUSSIAN FEDERATION, THE",
      zone: 4
    },
    {
      countryCode: "RW",
      country: "RWANDA"
    },
    {
      countryCode: "SA",
      country: "SAUDI ARABIA"
    },
    {
      countryCode: "SB",
      country: "SOLOMON ISLANDS"
    },
    {
      countryCode: "SC",
      country: "SEYCHELLES"
    },
    {
      countryCode: "SD",
      country: "SUDAN"
    },
    {
      countryCode: "SE",
      country: "SWEDEN",
      zone: 4
    },
    {
      countryCode: "SG",
      country: "SINGAPORE",
      zone: 7
    },
    {
      countryCode: "SH",
      country: "SAINT HELENA"
    },
    {
      countryCode: "SI",
      country: "SLOVENIA",
      zone: 1
    },
    {
      countryCode: "SK",
      country: "SLOVAKIA",
      zone: 1
    },
    {
      countryCode: "SL",
      country: "SIERRA LEONE"
    },
    {
      countryCode: "SM",
      country: "SAN MARINO",
      zone: 4
    },
    {
      countryCode: "SN",
      country: "SENEGAL"
    },
    {
      countryCode: "SO",
      country: "SOMALIA"
    },
    {
      countryCode: "SR",
      country: "SURINAME"
    },
    {
      countryCode: "SS",
      country: "SOUTH SUDAN"
    },
    {
      countryCode: "ST",
      country: "SAO TOME AND PRINCIPE"
    },
    {
      countryCode: "SV",
      country: "EL SALVADOR"
    },
    {
      countryCode: "SY",
      country: "SYRIA"
    },
    {
      countryCode: "SZ",
      country: "SWAZILAND"
    },
    {
      countryCode: "TC",
      country: "TURKS AND CAICOS ISLANDS"
    },
    {
      countryCode: "TD",
      country: "CHAD",
      zone: 9
    },
    {
      countryCode: "TG",
      country: "TOGO"
    },
    {
      countryCode: "TH",
      country: "THAILAND",
      zone: 7
    },
    {
      countryCode: "TJ",
      country: "TAJIKISTAN"
    },
    {
      countryCode: "TL",
      country: "EAST TIMOR"
    },
    {
      countryCode: "TN",
      country: "TUNISIA"
    },
    {
      countryCode: "TO",
      country: "TONGA"
    },
    {
      countryCode: "TR",
      country: "TURKEY",
      zone: 3
    },
    {
      countryCode: "TT",
      country: "BAGO"
    },
    {
      countryCode: "TV",
      country: "TUVALU"
    },
    {
      countryCode: "TW",
      country: "TAIWAN",
      zone: 7
    },
    {
      countryCode: "TZ",
      country: "TANZANIA"
    },
    {
      countryCode: "UA",
      country: "UKRAINE",
      zone: 4
    },
    {
      countryCode: "UG",
      country: "UGANDA"
    },
    {
      countryCode: "US",
      country: "UNITED STATES OF AMERICA",
      zone: 6
    },
    {
      countryCode: "UY",
      country: "URUGUAY"
    },
    {
      countryCode: "UZ",
      country: "UZBEKISTAN"
    },
    {
      countryCode: "VC",
      country: "ST. VINCENT"
    },
    {
      countryCode: "VE",
      country: "VENEZUELA"
    },
    {
      countryCode: "VG",
      country: "VIRGIN ISLANDS (BRITISH)"
    },
    {
      countryCode: "VI",
      country: "VIRGIN ISLANDS (US)"
    },
    {
      countryCode: "VN",
      country: "VIETNAM",
      zone: 7
    },
    {
      countryCode: "VU",
      country: "VANUATU"
    },
    {
      countryCode: "VA",
      country: "VATICAN",
      zone: 4
    },
    {
      countryCode: "WS",
      country: "SAMOA",
      zone: 9
    },
    {
      countryCode: "XB",
      country: "BONAIRE"
    },
    {
      countryCode: "XC",
      country: "CURACAO"
    },
    {
      countryCode: "XE",
      country: "ST. EUSTATIUS"
    },
    {
      countryCode: "XM",
      country: "ST. MAARTEN"
    },
    {
      countryCode: "XN",
      country: "NEVIS"
    },
    {
      countryCode: "XS",
      country: "SOMALILAND, REP OF (NORTH SOMALIA)"
    },
    {
      countryCode: "XY",
      country: "ST. BARTHELEMY"
    },
    {
      countryCode: "YE",
      country: "YEMEN, REPUBLIC OF"
    },
    {
      countryCode: "YT",
      country: "MAYOTTE"
    },
    {
      countryCode: "ZA",
      country: "SOUTH AFRICA",
      zone: 8
    },
    {
      countryCode: "ZM",
      country: "ZAMBIA"
    },
    {
      countryCode: "ZW",
      country: "ZIMBABWE"
    }
  ]
};

module.exports = data;