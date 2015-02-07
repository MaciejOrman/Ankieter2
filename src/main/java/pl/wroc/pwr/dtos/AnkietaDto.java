package pl.wroc.pwr.dtos;

import java.util.List;


import pl.wroc.pwr.data.models.enums.StatusAnkiety;

public class AnkietaDto {
	private StatusAnkiety statusAnkiety;	
	private List<PytanieDto> listaPytan;
	private SzablonAnkietyDto szablonAnkiety;
	
	protected AnkietaDto(){}
	
	public StatusAnkiety getStatusAnkiety() {
		return statusAnkiety;
	}
	public void setStatusAnkiety(StatusAnkiety statusAnkiety) {
		this.statusAnkiety = statusAnkiety;
	}
	public List<PytanieDto> getListaPytan() {
		return listaPytan;
	}
	public void setListaPytan(List<PytanieDto> listaPytan) {
		this.listaPytan = listaPytan;
	}
	
	public SzablonAnkietyDto getSzablonAnkiety() {
		return szablonAnkiety;
	}

	public void setSzablonAnkiety(SzablonAnkietyDto szablonAnkiety) {
		this.szablonAnkiety = szablonAnkiety;
	}

}