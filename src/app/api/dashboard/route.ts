import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from 'next/cache';


    export async function GetRequestByType() {
        noStore();
        let res = await fetch(`${process.env.API_URL}/requestByType`);
        let data = await res.json();      
        return NextResponse.json({ data });
    }
    export async function GetRequestByStatus() {
        noStore();
        let res = await fetch(`${process.env.API_URL}/requestByStatus`);
        let data = await res.json();      
        return NextResponse.json({ data });
    }
    export async function GetRequestByPriority() {
        noStore();
        let res = await fetch(`${process.env.API_URL}/requestByPriority`);
        let data = await res.json();      
        return NextResponse.json({ data });
    }
    export async function GetDashboardCards(){
        noStore();
        let res = await fetch(`${process.env.API_URL}/DashboardCards`);
        let data = await res.json();      
        return NextResponse.json({ data });
    }
