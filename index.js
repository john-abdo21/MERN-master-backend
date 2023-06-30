const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/listfsprojects", (req, res) => {
  const data = {
    posts: [
      {
        name: "Bureau Features",
        descr: "Bureau Feature store",
        categories: [
          {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Transaction Features",
        descr: "Transaction Feature store",
        categories: [
          {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Bureau Features",
        descr: "Bureau Feature store",
        categories: [
         {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Transaction Features",
        descr: "Transaction Feature store",
        categories: [
         {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Bureau Features",
        descr: "Bureau Feature store",
        categories: [
          {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Transaction Features",
        descr: "Transaction Feature store",
        categories: [
         {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Bureau Features",
        descr: "Bureau Feature store",
        categories: [
          {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Transaction Features",
        descr: "Transaction Feature store",
        categories: [
          {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Bureau Features",
        descr: "Bureau Feature store",
        categories: [
         {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
      {
        name: "Transaction Features",
        descr: "Transaction Feature store",
        categories: [
         {
            name: "CIBIL",
            descr: "Cibil bureau fs",
            image:
              "https://commerceclub.in/wp-content/uploads/2014/12/cibil-logo.jpg",
          },
          {
            name: "Transunion",
            descr: "Transunion bureau fs",
            image:
              "https://companieslogo.com/img/orig/TRU-06bc4c0a.png?t=1660501631",
          },
          {
            name: "Equifax",
            descr: "equifax bureau fs",
            image:
              "https://equifax.wd5.myworkdayjobs.com/External/assets/logo",
          },
        ],
      },
    ],
  };
  res.json(data);
});

app.post("/fetchdatamap", (req, res) => {
  const data = req.body;
  console.log(data);
  res.json({
    posts: [
      {
        dsKey: "ds_1",
        dataName: "Trade",
      },
      {
        dsKey: "ds_2",
        dataName: "Inquiry",
      },
    ],
  });
});

app.get("/connector-list", (req, res) => {
  res.json({
    posts: [
      { 
      descr: "<MySql> bureau fs",
        Name: "MySql",
        Type: "Database", 
        image: "https://commerceclub.in/wp-content/uploads/2014/12/MySql.png"
      },
      {
      descr: "PotgeSql bureau fs",
        Name: "PostgreSql",
        Type: "Database",
        image: "https://commerceclub.in/wp-content/uploads/2014/12/PostgreSql.png"
      },
      { 
      descr: "Oracle bureau fs",
        Name: "Oracle",
        Type: "Database",
        image: "https://commerceclub.in/wp-content/uploads/2014/12/Oracle.png"
      },
      { 
      descr: "SnowSql bureau fs",
        Name: "SnowSql",
        Type: "Database",
        image: "https://commerceclub.in/wp-content/uploads/2014/12/SnowSql.png"
      },
    ],
  });
});
app.get("/connector-string", (req, res) => {
  res.json({
    posts: {
      host: {
        name: "host",
        type: "String",
        value: null,
        description: null,
        isSensitive: false,
        isMendatory: true,
      },
      port: {
        name: "port",
        type: "number",
        value: null,
        description: null,
        isSensitive: false,
        isMendatory: true,
      },
      databaseName: {
        name: "database Name",
        type: "String",
        value: null,
        description: null,
        isSensitive: false,
        isMendatory: true,
      },
      username: {
        name: "username",
        type: "String",
        value: null,
        description: null,
        isSensitive: false,
        isMendatory: true,
      },
      password: {
        name: "password",
        type: "password",
        value: null,
        description: null,
        isSensitive: true,
        isMendatory: true,
      },
      schemaPattern: {
        name: "Schema Pattern",
        type: "String",
        value: null,
        description: "A pattern for matching schemas in the database.",
        isSensitive: true,
        isMendatory: false,
      },
      tableNamePattern: {
        name: "Table Name Pattern",
        type: "String",
        value: null,
        description: "A pattern for matching tables in database.",
        isSensitive: true,
        isMendatory: false,
      },
    },
  });
});

app.post("/conn-setup", (req, res) => {
  console.log(req.body);
  res.json({
    state: "chal gaya",
  });
});

app.get("/tbl-lst", (req, res) => {
  res.json({
    posts: {
      tableNames: [
        "lt_apps",
        "lt_dv_info",
        "lt_hard_hit",
        "lt_loans",
        "cibil_bureau_trade",
      ],
    },
  });
});

// app.get("/col-lst", (req, res) => {
//   res.json({
//     posts: [
//       { COLUMN_NAME: "Date", DATA_TYPE: "date" },
//       { COLUMN_NAME: "Name", DATA_TYPE: "string" },
//       { COLUMN_NAME: "age", DATA_TYPE: "number" },
//     ],
//   });
// });

app.post("/tbl-read", (req, res) => {
  console.log(req.body);

  res.json({
    posts: "Success",
  });
});

app.get("/col-lst", (req, res) => {
  res.json({
    posts: [
      {
        COLUMN_NAME: "writeoff_status",
        type: "String",
      },
      {
        COLUMN_NAME: "writeoff_amt_tot",
        type: "String",
      },
      {
        COLUMN_NAME: "writeoff_amt_prin",
        type: "String",
      },
      {
        COLUMN_NAME: "Version",
        type: "String",
      },
      {
        COLUMN_NAME: "TU_score",
        type: "String",
      },
      {
        COLUMN_NAME: "tenure",
        type: "String",
      },
      {
        COLUMN_NAME: "Tenor_Frequency",
        type: "String",
      },
      {
        COLUMN_NAME: "Telephone",
        type: "String",
      },
      {
        COLUMN_NAME: "Tel_Type",
        type: "String",
      },
      {
        COLUMN_NAME: "Tel_Extn",
        type: "String",
      },
      {
        COLUMN_NAME: "suit_filed_status",
        type: "String",
      },
      {
        COLUMN_NAME: "StateCode",
        type: "String",
      },
      {
        COLUMN_NAME: "settlement_amt",
        type: "String",
      },
      {
        COLUMN_NAME: "Segment",
        type: "String",
      },
      {
        COLUMN_NAME: "scrub_month",
        type: "String",
      },
      {
        COLUMN_NAME: "scorename",
        type: "String",
      },
      {
        COLUMN_NAME: "ScoreDate",
        type: "String",
      },
      {
        COLUMN_NAME: "Sanction_Amount",
        type: "String",
      },
      {
        COLUMN_NAME: "ROI",
        type: "String",
      },
      {
        COLUMN_NAME: "res_code",
        type: "String",
      },
      {
        COLUMN_NAME: "ReportingMemberShortName",
        type: "String",
      },
      {
        COLUMN_NAME: "ReasonCode5",
        type: "String",
      },
      {
        COLUMN_NAME: "ReasonCode4",
        type: "String",
      },
      {
        COLUMN_NAME: "ReasonCode3",
        type: "String",
      },
      {
        COLUMN_NAME: "ReasonCode2",
        type: "String",
      },
      {
        COLUMN_NAME: "ReasonCode1",
        type: "String",
      },
      {
        COLUMN_NAME: "PINCode",
        type: "String",
      },
      {
        COLUMN_NAME: "Paymt_hst_05",
        type: "String",
      },
      {
        COLUMN_NAME: "Paymt_hst_04",
        type: "String",
      },
      {
        COLUMN_NAME: "Paymt_hst_03",
        type: "String",
      },
      {
        COLUMN_NAME: "Paymt_hst_02",
        type: "String",
      },
      {
        COLUMN_NAME: "Paymt_hst_01",
        type: "String",
      },
      {
        COLUMN_NAME: "Pay_Hist_Start_date",
        type: "String",
      },
      {
        COLUMN_NAME: "Pay_Hist_End_Date",
        type: "String",
      },
      {
        COLUMN_NAME: "Ownership_type",
        type: "String",
      },
      {
        COLUMN_NAME: "Overdue_Amount",
        type: "String",
      },
      {
        COLUMN_NAME: "Out_standing_balance",
        type: "String",
      },
      {
        COLUMN_NAME: "occupation_code",
        type: "String",
      },
      {
        COLUMN_NAME: "net_gross_indicator",
        type: "String",
      },
      {
        COLUMN_NAME: "name",
        type: "String",
      },
      {
        COLUMN_NAME: "monthly_annual_indicator",
        type: "String",
      },
      {
        COLUMN_NAME: "MemberShortName",
        type: "String",
      },
      {
        COLUMN_NAME: "MemberReference",
        type: "String",
      },
      {
        COLUMN_NAME: "Loan_Type",
        type: "String",
      },
      {
        COLUMN_NAME: "Loan_status",
        type: "String",
      },
      {
        COLUMN_NAME: "Loan_acccount_number",
        type: "String",
      },
      {
        COLUMN_NAME: "Last_payment_date",
        type: "String",
      },
      {
        COLUMN_NAME: "Issue_Date",
        type: "String",
      },
      {
        COLUMN_NAME: "income",
        type: "String",
      },
      {
        COLUMN_NAME: "ID_Type",
        type: "String",
      },
      {
        COLUMN_NAME: "ID_Number",
        type: "String",
      },
      {
        COLUMN_NAME: "High_Credit_Amount",
        type: "String",
      },
      {
        COLUMN_NAME: "gender",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode9",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode8",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode7",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode6",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode5",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode4",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode3",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode2",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode10",
        type: "String",
      },
      {
        COLUMN_NAME: "ExclusionCode1",
        type: "String",
      },
      {
        COLUMN_NAME: "Enr_Enq_pt",
        type: "String",
      },
      {
        COLUMN_NAME: "Enr_Enq_pa",
        type: "String",
      },
      {
        COLUMN_NAME: "EnquiryPurpose",
        type: "String",
      },
      {
        COLUMN_NAME: "EnquiryAmount",
        type: "String",
      },
      {
        COLUMN_NAME: "EnquiringMemberShortName",
        type: "String",
      },
      {
        COLUMN_NAME: "emi_amt",
        type: "String",
      },
      {
        COLUMN_NAME: "email_id",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode_em",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode2_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode2_em",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode1_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "DisputeRemarksCode1_em",
        type: "String",
      },
      {
        COLUMN_NAME: "DateReportedTrades",
        type: "String",
      },
      {
        COLUMN_NAME: "datereported_employment",
        type: "String",
      },
      {
        COLUMN_NAME: "DateReported_address",
        type: "String",
      },
      {
        COLUMN_NAME: "DateofEntry_ErrorCode_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "DateofEnquiry",
        type: "String",
      },
      {
        COLUMN_NAME: "DateofBirth",
        type: "String",
      },
      {
        COLUMN_NAME: "DATE_OPENED",
        type: "String",
      },
      {
        COLUMN_NAME: "DATE_CLOSED",
        type: "String",
      },
      {
        COLUMN_NAME: "Date_CIBILRemarksCode_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "CREDITLIMIT",
        type: "String",
      },
      {
        COLUMN_NAME: "collateral_value",
        type: "String",
      },
      {
        COLUMN_NAME: "collateral_type",
        type: "String",
      },
      {
        COLUMN_NAME: "CIBILRemarksCode_tl",
        type: "String",
      },
      {
        COLUMN_NAME: "cash_limit",
        type: "String",
      },
      {
        COLUMN_NAME: "address_cat",
        type: "String",
      },
      {
        COLUMN_NAME: "address",
        type: "String",
      },
      {
        COLUMN_NAME: "actual_paymt_amt",
        type: "String",
      },
      {
        COLUMN_NAME: "AccountNumber",
        type: "String",
      },
      {
        COLUMN_NAME: "account_type_empseg",
        type: "String",
      },
    ],
  });
});

app.post("/fetchdatafeaturemap", (req, res) => {
  res.json({
    posts: [
      {
        featureMap: {
          reqdCols: [
            "Loan_Type",
            "ACCT_TYPE_CD",
            "DATE_OPENED",
            "DATE_CLOSED",
            "Last_payment_date",
            "Out_standing_balance",
            "MemberReference",
            "Sanction_Amount",
            "DateReportedTrades",
          ],
        },
      },
    ],
  });
});

app.post("/fetchdatavaluemap", (req, res) => {
  console.log(req.body)
  res.json({
    posts: [
      {
        Loan_Type: {
          stageId: "stage_1",
          valueMapInfo: [
            "1",
            "51",
            "53",
            "54",
            "52",
            "59",
            "55",
            "57",
            "58",
            "56",
            "17",
            "33",
            "6",
            "35",
            "10",
            "8",
            "16",
            "7",
            "2",
            "11",
            "15",
            "9",
            "4",
            "40",
            "42",
            "43",
            "41",
            "14",
            "12",
            "5",
            "3",
            "31",
            "19",
          ],
        },
        ACCT_TYPE_CD: {
          stageId: "stage_3",
          valueMapInfo: [
            "CC",
            "CD",
            "GL",
            "PL",
            "AL",
            "TW",
            "HL",
            "CV",
            "BL",
            "LAP",
            "EL",
            "UC",
            "Un_Sec",
            "Sec",
          ],
        },
      },
    ],
  });
});

app.post("/fetchpareto", (req, res) => {
  console.warn(req.body);
  res.json({
    status: 200,
    data: {
      posts: [
        {
          Loan_Type: [
            { name: "Credit Card", percent: 4.585428, variableMapped: "" },
            {
              name: "Buisiness Loan General",
              percent: 8.693571,
              variableMapped: "",
            },
            {
              name: "Buisiness Loan Unsecured",
              percent: 3.964274,
              variableMapped: "",
            },
            { name: "Personal Loan", percent: 2.514845, variableMapped: "" },
            { name: "Auto Loan", percent: 2.444681, variableMapped: "" },
          ],
        },
      ],
    },
  });
});

app.post("/createproject", (req, res) => {
  console.log(req.body);
  res.json({ status: 200, data: { posts: [{ projectKey: "IUJN9OXN2UF8" }] } });
});
let count = 0;
app.get("/dsource-status", (req, res) => {
  count++;
  console.log(count);
  res.json({
    status: 200,
    data: {
      posts: [
        {
          ds_1: [
            { stage: "Data Upload", status: "Not Started" },
            { stage: "Feature Map", status: "In Progress" },
            { stage: "Value Map", status: "Not Started" },
          ],
          ds_2: [
            { stage: "Data Upload", status: "In Progress" },
            { stage: "Feature Map", status: "Not Started" },
            { stage: "Value Map", status: "Not Started" },
          ],
        },
      ],
    },
  });
});

app.get("/perffeatmap", (req, res) => {
  const data = req.body;
  console.log(data);
  res.status(200);
  return;
});

app.listen(3000, () => { console.log('server running port:',3000);});
