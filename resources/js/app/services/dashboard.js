export function get_dashboard_user_by_id_service(data) {
  try {
      const res = axios.get("/api/dashboard/"+data);
      return res;
  } catch (error) {
      return error;
  }
}

export function get_admin_dashboard_service(data) {
  try {
      const res = axios.get("/api/dashboard?site_id="+data.site_id);
      return res;
  } catch (error) {
      return error;
  }
}
