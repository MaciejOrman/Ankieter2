package pl.wroc.pwr.dtos;


import java.util.List;

import pl.wroc.pwr.data.models.baseTypes.Osoba;

public class AnkietowanyDto extends Osoba {

	private Long numerIndeksu;
	private String adresMailowy;
	private List<KursDto> kursy;
	private List<AnkietaDto> ankiety;
	
	protected AnkietowanyDto(){}


	public Long getNumerIndeksu() {
		return numerIndeksu;
	}

	public void setNumerIndeksu(Long numerIndeksu) {
		this.numerIndeksu = numerIndeksu;
	}

	public String getAdresMailowy() {
		return adresMailowy;
	}

	public void setAdresMailowy(String adresMailowy) {
		this.adresMailowy = adresMailowy;
	}

	public List<KursDto> getKursy() {
		return kursy;
	}

	public void setKursy(List<KursDto> kursy) {
		this.kursy = kursy;
	}

	
}