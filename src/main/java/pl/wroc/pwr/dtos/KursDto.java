package pl.wroc.pwr.dtos;

import pl.wroc.pwr.data.models.SzablonAnkiety;

public class KursDto {
	private String nazwa;
	private String kod;
	private SzablonAnkiety szablonAnkiety;
	
	protected KursDto(){}
	
	public String getNazwa() {
		return nazwa;
	}
	public void setNazwa(String nazwa) {
		this.nazwa = nazwa;
	}
	public String getKod() {
		return kod;
	}
	public void setKod(String kod) {
		this.kod = kod;
	}
	public SzablonAnkiety getSzablonAnkiety() {
		return szablonAnkiety;
	}
	public void setSzablonAnkiety(SzablonAnkiety szablonAnkiety) {
		this.szablonAnkiety = szablonAnkiety;
	}
}