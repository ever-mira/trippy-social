import { defineEventHandler, readBody } from "h3"
import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server"
import type { Database } from "~~/types/database.types"

export default defineEventHandler(async (event) => {
  const report_id = getRouterParam(event, "report_id")

  if (!report_id) {
    throw new Error("No report id provided")
  }

  try {
    const client = await serverSupabaseClient<Database>(event)
    const user = await serverSupabaseUser(event)

    if (!user) {
      throw createError({ statusCode: 401, statusMessage: "Nicht authentifiziert" })
    }

    const { error } = await client.from("trip_reports").delete().eq("id", Number(report_id))

    if (error) {
      throw error
    }
  } catch (error: any) {
    throw error
  }
})
