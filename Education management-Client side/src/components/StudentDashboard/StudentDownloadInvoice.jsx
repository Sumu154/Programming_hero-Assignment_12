import React, { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, pdf, Image } from "@react-pdf/renderer";

import logo from '../../assets/logos/educair.png'

const StudentDownloadInvoice = ({ course, order_transaction_id, setPdfUrl }) => {
  const [pdfBlob, setPdfBlob] = useState(null);

  const styles = StyleSheet.create({
    page: { 
      flexDirection: "column", 
      paddingVertical: 24,
    },
    header: { 
      width: "80%",
      marginHorizontal: "auto",
      flexDirection: "row", 
      justifyContent: "space-between",
      alignItems: "center", 
      marginBottom: 10,
    },
    headerText: {
      fontSize: 28,
      fontWeight: 700,
      color: "#433878",
    },
    mainText: {
      fontSize: 28,
      fontWeight: 700,
      textAlign: "center",
      marginBottom: 32,
      textDecoration: "underline"
    },
    content: { 
      fontSize: 16,
      width: "60%",
      marginHorizontal: "auto",
      marginBottom: 8,

    },
    spanText: {
      fontWeight: 600,
    },
    logo: {
      width: 120, // Adjust size
      height: 120,
    },
  });

  // Function to return JSX instead of direct component usage in useEffect
  const TransactionDocument = () => (
    <Document>
      <Page size={{ width: 660, height: 600 }} style={styles.page}>
        <View style={styles.header}>
          <Image src={logo} style={styles.logo}   ></Image>
          <Text style={styles.headerText}> Educair </Text>
        </View>

        <View>
          <Text style={styles.mainText}>Transaction Receipt</Text>
          <Text style={styles.content}> <Text style={styles.spanText}> Transaction ID: </Text> {order_transaction_id}</Text>
          <Text style={styles.content}> <Text style={styles.spanText}> Course Name: </Text> {course?.course_title}</Text>
          <Text style={styles.content}> <Text style={styles.spanText}> Course Price: </Text> {course?.course_price}</Text>
        </View>
      </Page>
    </Document>
  );

  useEffect(() => {
    const generatePdfBlob = async () => {
      const blob = await pdf(TransactionDocument()).toBlob();
      const url = URL.createObjectURL(blob);
      console.log(url);
      setPdfUrl(url); 
      setPdfBlob(url);
    }; 
      
    generatePdfBlob();
  }, []);

  return (
    <div className="flex justify-end">
      {pdfBlob && (
        <PDFDownloadLink document={TransactionDocument()} fileName="transaction_receipt.pdf">
          {({ loading }) => (
            <button className="bg-orange hover:bg-orange/90 text-sm text-white font-semibold px-4 py-[6px] rounded-md">
              {loading ? "Generating PDF..." : "Download PDF"}
            </button>
          )}
        </PDFDownloadLink>
      )}
    </div>
  );
};

export default StudentDownloadInvoice;
